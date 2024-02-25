import dotenv from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
dotenv.config();

const openai = new OpenAI({
    // you need to set this in your local .env file until this is deployed
    apiKey: process.env.OPENAI_API_KEY 
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // only allow POST requests
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method ${req.method} Not Allowed');
    }

    // get text from req
    const { text } = req.body;

    // make sure text is not empty
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }
    
    // get summary
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "summarize this text:\n" + text }],
            model: "gpt-3.5-turbo",
        });

        const summary = completion.choices[0].message.content;
        if (summary) {
            res.status(200).json({ summary });
        } else {
            throw new Error('Failed to get summary');
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Error occurred while getting summary' });
    }
}