import officeParser from "officeparser";

export async function POST(request: Request) {
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
