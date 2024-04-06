import officeParser from "officeparser";
import fs from "fs";
import path from "path";
import { Buffer } from "buffer";

// Ensure that the /tmp directory exists
const tempDir = path.join('/tmp', 'officeParserTemp', 'tempfiles');

function ensureDirSync(dirpath : any) {
  try {
    return fs.mkdirSync(dirpath, { recursive: true });
  } catch (err : any) {
    if (err.code !== 'EEXIST') throw err; // Ignore the error if the directory already exists
  }
}

// Ensuring the directory exists in the serverless function
ensureDirSync(tempDir);

export async function POST(request: Request) {
  // Ensuring the directory exists during the runtime of your serverless function
  const tempDir = path.join('/tmp', 'officeParserTemp', 'tempfiles');
  ensureDirSync(tempDir);

  const formData = await request.formData();
  const file = formData.get("file") as File;
  console.log("File name:", file.name, "size:", file.size);
  console.log("THIS: " + file);

  if (
    file.name.toLowerCase().endsWith(".pdf") ||
    file.name.toLowerCase().endsWith(".docx")
  ) {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const data = await officeParser.parseOfficeAsync(fileBuffer);
    const response = new Response(JSON.stringify(data));
    console.log(response);
    return response;
  } else if (file.name.toLowerCase().endsWith(".txt")) {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const data = fileBuffer.toString("utf-8");
    const response = new Response(JSON.stringify(data));
    console.log(response);
    return response;
  }
}

// do response.data to get the text

// });
