"use client";

import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState<string | ArrayBuffer | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result;

        if (typeof result === 'string') {
          setContent(result);
          setError(null); // Clear previous error
        } else {
          setContent(null);
          setError('File content is not readable.');
        }
      };

      reader.readAsText(selectedFile); // Read as text
    }
  };

  return (
    <div>
      <input
        type="file"
        // Remove accept attribute to allow any file type
        onChange={handleFileChange}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {content && (
        <div>
          <h3>File Content:</h3>
          <pre>{content.toString()}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;


// "use client"

// import { useState } from 'react';

// export default function HomePage() {
//     const [filePath, setFilePath] = useState<string>('');
//     const [content, setContent] = useState<string | null>(null);
//     const [error, setError] = useState<string | null>(null);
    
//     const fetchFileContent = async () => {
//         if (!filePath) {
//             setError('Please enter a file path.');
//             return;
//         }

//         try {
//             const response = await fetch(`/api/getpath?filePath=${filePath}`);
         

//             const data = await response.json();
//             console.log(data)
//             if (data.error) {
//                 setError(data.error);
//             } else {
//                 setContent(data.content);
//                 setError(null); // Clear any previous errors
//             }
//         } catch (err) {
//             const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
//             setError(errorMessage);
//         }
//     };

//     return (
//         <div>
//             <h1>File Content</h1>
//             <input 
//                 type="text" 
//                 value={filePath} 
//                 onChange={(e) => setFilePath(e.target.value)} 
//                 placeholder="Enter file path" 
//                 style={{ width: '100%', marginBottom: '10px' }}
//             />
//             <button onClick={fetchFileContent}>Fetch File</button>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {content ? (
//                 <pre>{content}</pre>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }
