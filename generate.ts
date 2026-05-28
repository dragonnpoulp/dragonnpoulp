import { loadEnvFile } from 'node:process';
import fs from 'node:fs/promises';
import Anthropic from '@anthropic-ai/sdk';
import type { MessageParam } from '@anthropic-ai/sdk/resources';

loadEnvFile();

const jdSource = process.argv[2];

const client = new Anthropic();

// const x = (await fs.readFile('test.txt')).toString();
// const json = x!.replace(/^```json\s*/g, '').replace(/```$/g, '');
// console.log(JSON.parse(json));
// process.exit();

async function getPromptAnswer(prompt: string) {
	const messages: MessageParam[] = [
		{
			role: 'user',
			content: prompt
		}
	];

	const message = await client.messages.create({
		max_tokens: 10240,
		messages: messages,
		model: 'MiniMax-M2.7',
	});

	const textContext = message.content.find((m) => m.type === 'text');

	if (!textContext) {
		throw new Error('Message does not contain text');
	}

	const response = textContext.text;
	const json = response!.replace(/^\s*```json\s*/g, '').replace(/\s*```\s*$/g, '');

	try {
		return JSON.parse(json);
	} catch {
		await fs.writeFile("error-response.txt", response)
		await fs.writeFile("error-json.json", json)
		throw new Error(`Failed to parse, refer error-response.txt and error-json.json`);
	}
}

async function analyzeJd() {
	const analyzeJdTemplate = (await fs.readFile('./prompts/analyze-jd.txt')).toString();
	const analyzeJdPrompt = analyzeJdTemplate.replaceAll(
		/{{__JD__}}/g,
		(await fs.readFile(jdSource)).toString()
	);
	return await getPromptAnswer(analyzeJdPrompt);
}

async function writeResume(analyzeJdResult: string) {
	const writeResumeTemplate = (await fs.readFile('./prompts/write-resume.txt')).toString();
	const writeResumePrompt = writeResumeTemplate
		.replaceAll(/{{__MASTER_DATA__}}/g, (await fs.readFile('./master.json')).toString())
		.replaceAll(/{{__ANALYZE_JD_RESULT__}}/g, analyzeJdResult);
	console.log(writeResumePrompt);
	return await getPromptAnswer(writeResumePrompt);
}

async function writeCoverLetter(analyzeJdResult: string) {
	const writeResumeTemplate = (await fs.readFile('./prompts/write-cover-letter.txt')).toString();
	const writeResumePrompt = writeResumeTemplate
		.replaceAll(/{{__MASTER_DATA__}}/g, (await fs.readFile('./master.json')).toString())
		.replaceAll(/{{__ANALYZE_JD_RESULT__}}/g, analyzeJdResult);
	console.log(writeResumePrompt);
	return await getPromptAnswer(writeResumePrompt);
}

const analyzeJdResult = JSON.stringify(await analyzeJd(), null, 2);
const analyzeTarget = jdSource.replace(/\-jd\.txt$/g, '-jd-analyzed.json');
await fs.writeFile(analyzeTarget, analyzeJdResult);

const writeResumeResult = JSON.stringify(await writeResume(analyzeJdResult), null, 2);
await fs.writeFile(jdSource.replace(/\-jd\.txt$/g, '-resume.json'), writeResumeResult);

const writeCoverLetterResult = await writeCoverLetter(analyzeJdResult);
await fs.writeFile(jdSource.replace(/\-jd\.txt$/g, '-cover-letter.txt'), writeCoverLetterResult.coverLetter);
