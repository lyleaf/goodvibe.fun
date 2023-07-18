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
        //console.log("🚀 ~ file: +server.ts:19 ~ OpenAIRespond ~ body:", body) // OK
        const respondString = body.choices[0].text;
        console.log("🚀 ~ file: +server.ts:20 ~ OpenAIRespond ~ respondString:", respondString)
		return respondString;
	} catch (e) {
		console.log("🚀 ~ file: +server.ts:99 ~ OpenAINotStream ~ e:", e)
		//controller.error(e);
	}
}

export async function POST({ request }: { request: any }) {
    const { searched } = await request.json();
    console.log("🚀 ~ file: +server.ts:146 ~ POST ~ searched:", searched)
    const payload = {
        model: "text-davinci-003",
        prompt: searched,
        temperature: 0.7,
        max_tokens: 50,
    };
    const respondString = await OpenAIRespond(payload);
    return new Response(JSON.stringify(
        { message: respondString }), 
        { status: 200 }); 
}
