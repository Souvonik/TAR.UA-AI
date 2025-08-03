import { File, X, FileText, Image, Video, FileType } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileListProps {
  fileName: string | null;
  fileType: string | null;
  onRemoveFile: () => void;
}

export const FileList = ({
  fileName,
  fileType,
  onRemoveFile,
}: FileListProps) => {
  if (!fileName) {
    return null;
  }

  const getFileIcon = () => {
    if (!fileType) return <File className="h-4 w-4" />;
    if (fileType.startsWith("image/")) return <Image className="h-4 w-4" />;
    if (fileType.startsWith("video/")) return <Video className="h-4 w-4" />;
    if (fileType === "application/pdf")
      return <FileType className="h-4 w-4" />;
    return <FileText className="h-4 w-4" />;
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between p-2 border rounded-lg">
        <div className="flex items-center gap-2">
          {getFileIcon()}
          <span className="text-sm">{fileName}</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onRemoveFile}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};