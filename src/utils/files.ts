import { ChangeEvent } from 'react';

/**
 * Extract the text from a file uploaded to an <input>
 * @param e The <input>'s change event
 * @returns The file content
 */
export async function uploadText(e: ChangeEvent<HTMLInputElement>) {
  const file = e.target.files?.[0];
  return file ? await file.text() : '';
}

/**
 * Download a file to the user's machine
 * @param fileName The name of the file
 * @param content The text content of the file
 * @param type The MIME type of the file (eg. 'text/csv', 'text/xml', etc)
 */
export function downloadText(fileName: string, content: string, type: string) {
  const file = new Blob([content], { type: `${type};charset=utf-8;` });
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}
