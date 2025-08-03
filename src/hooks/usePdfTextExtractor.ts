import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const usePdfTextExtractor = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const extractText = async (file: File) => {
    setLoading(true);
    setError(null);
    setText('');

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
      let fullText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        fullText += textContent.items.map(item => (item as { str: string }).str).join(' ');
      }

      setText(fullText);
    } catch (e) {
      setError('Failed to extract text from PDF.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return { text, loading, error, extractText };
};