import type { NextApiRequest, NextApiResponse } from 'next';

export default async function Get(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const file = req.body; // Yahan file ko process karein
    res.status(200).json({ message: 'File received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


// import { NextResponse, NextRequest } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET(req: NextRequest) {
//     const { searchParams } = new URL(req.url);
//     const filePath = searchParams.get('filePath'); // Get the filePath from query parameters

//     if (!filePath) {
//         return NextResponse.json({ error: 'filePath is required' }, { status: 400 });
//     }

//     try {
//         // Normalize the file path to avoid issues with different formats
//         const resolvedPath = path.resolve(filePath);
//         const data = fs.readFileSync(resolvedPath, 'utf8');
//         return NextResponse.json({ content: data });
//     } catch (err) {
//         console.error('Error reading file:', err);
//         return NextResponse.json({ error: 'Error reading file' }, { status: 500 });
//     }
// }


// import { NextResponse } from 'next/server';
// import fs from 'fs';

// export async function GET() {

//     const filePath = 'D:\\RegistrationOfBSA.txt'; // Update this to your actual file path

//     // const filePath = '\\\\vvserver\\Divyanshi\\Merge folder\\PAPERBIZ\\ArrivalStatus_Master\\NewTextDocument.txt'; 

//     try {
//         const data = fs.readFileSync(filePath, 'utf8');
//         return NextResponse.json({ content: data });
//     } catch (err) {
//         console.error('Error reading file:', err);
//         return NextResponse.json({ error: 'Error reading file' }, { status: 500 });
//     }
// }
