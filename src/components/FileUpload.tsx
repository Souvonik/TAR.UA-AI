import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, File, X, FileText, Image, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { usePdfTextExtractor } from "@/hooks/usePdfTextExtractor";

interface UploadedFile {
  name: string;
  type: string;
  size: number;
  text: string;
}

interface FileUploadProps {
  onFileUploaded: (file: UploadedFile) => void;
  children: React.ReactNode;
}

export const FileUpload = ({
  onFileUploaded,
  children,
}: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();
  const {
    text: pdfText,
    loading: pdfLoading,
    error: pdfError,
    extractText,
  } = usePdfTextExtractor();

  const processFile = async (file: File) => {
    try {
      setUploading(true);
      setUploadProgress(20);

      let text = "";
      if (file.type === "application/pdf") {
        await extractText(file);
        text = pdfText;
      } else if (file.type.startsWith("text/")) {
        text = await file.text();
      } else {
        text = "File type not supported for text extraction.";
      }

      setUploadProgress(100);

      toast({
        title: "File processed successfully",
        description: `${file.name} has been processed.`,
      });

      onFileUploaded({
        name: file.name,
        type: file.type,
        size: file.size,
        text,
      });
    } catch (error) {
      console.error("Error processing file:", error);
      toast({
        title: "Processing failed",
        description: "There was an error processing your file.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      processFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "text/plain": [".txt"],
      "text/markdown": [".md"],
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};