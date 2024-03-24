import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // you need to set this in your local .env file until this is deployed
});

export async function POST(request: Request) {
  const bodyBuffer = await new Response(request.body).arrayBuffer();
  const bodyJSON = new TextDecoder("utf-8").decode(bodyBuffer);
  const body = JSON.parse(bodyJSON);

  const { option, text } = body;
  console.log(text);

  let prompt = "";

  switch (option) {
    case "Paragraph":
      prompt = "summarize this text with a paragraph:\n";
      break;
    case "Bullet Points":
      prompt = "summarize this text with bullet points:\n ";
      break;
    case "Sentence":
      prompt = "summarize this text with sentence:\n";
      break;
    default:
      prompt = "summarize this text with a paragraph:\n";
      break;
  }

  const response = await chatGPTApiCall(prompt, text);

  return response;
}

export async function chatGPTApiCall(
  prompt: string,
  text: string
): Promise<Response> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt + text }],
      model: "gpt-3.5-turbo",
    });

    const summary = completion.choices[0]?.message.content;
    console.log(`Summary: ${summary}`);

    return new Response(JSON.stringify(summary), {
      status: 200,
    });
  } catch (e) {
    console.error(e);

    return new Response(JSON.stringify("ChatGPT API call failed."), {
      status: 500,
    });
  }
}
