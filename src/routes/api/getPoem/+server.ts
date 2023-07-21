import { createParser } from 'eventsource-parser';
import { OPENAI_API_KEY } from '$env/static/private';
import { kv } from '@vercel/kv';

const key = OPENAI_API_KEY;


async function OpenAIRespond(payload) {
	try {
		const res = await fetch('https://api.openai.com/v1/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${key}`,
			},
			body: JSON.stringify(payload),
		});	
        const body = await res.json();
        const respondString = body.choices[0].text;
		return respondString;
	} catch (e) {
		console.log("🚀 ~ file: +server.ts:99 ~ OpenAINotStream ~ e:", e)
		//controller.error(e);
	}
}

export async function POST({ request }: { request: any }) {
    const { searched } = await request.json();
    const payload = {
        model: "text-davinci-003",
        prompt: searched,
        temperature: 0.7,
        max_tokens: 100,
    };
    const respondString = await OpenAIRespond(payload);
    console.log("🚀 ~ file: +server.ts:39 ~ POST ~ respondString:", respondString)
    return new Response(JSON.stringify(
        { message: respondString }), 
        { status: 200 });    
}
