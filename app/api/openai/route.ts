import dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
dotenv.config();

const openai = new OpenAI({
  // you need to set this in your local .env file until this is deployed
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const bodyBuffer = await new Response(request.body).arrayBuffer();
  const bodyString = new TextDecoder("utf-8").decode(bodyBuffer);

  console.log(bodyString);

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "summarize this text:\n" + bodyString },
      ],
      model: "gpt-3.5-turbo",
    });

    const summary = completion.choices[0].message.content;
    console.log(`Summary: ${summary}`);

    const response = new Response(JSON.stringify(summary));
    return response;
  } catch (e) {
    console.error(e);
  }
}
