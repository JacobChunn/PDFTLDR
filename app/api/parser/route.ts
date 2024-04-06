import officeParser from 'officeparser';
import { promises as fs } from 'fs';


export async function POST(request: Request) {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');

  try {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file || typeof file !== 'object') {
      throw new Error('File not found in the form data.');
    }

    console.log('File name:', file.name, 'size:', file.size);
  
    if (file.name.toLowerCase().endsWith('.pdf') || file.name.toLowerCase().endsWith('.docx')) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const data = await officeParser.parseOfficeAsync(fileBuffer);
      return new Response(JSON.stringify(data));
    } else if (file.name.toLowerCase().endsWith('.txt')) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const text = fileBuffer.toString('utf-8');
      return new Response(JSON.stringify({ text }));
    } else {
      return new Response('Unsupported file type', { status: 400 });
    }
  } catch (error) {
    console.error('Error processing the file:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
