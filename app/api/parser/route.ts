
import officeParser from "officeparser";


export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    console.log("File name:", file.name, "size:", file.size);

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const data = await officeParser.parseOfficeAsync(fileBuffer);

    const response = new Response(JSON.stringify(data))

    return response;
  }

  // do response.data to get the text