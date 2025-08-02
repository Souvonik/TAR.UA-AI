import { File, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileListProps {
  fileName: string | null;
  onRemoveFile: () => void;
}

export const FileList = ({ fileName, onRemoveFile }: FileListProps) => {
  if (!fileName) {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between p-2 border rounded-lg">
        <div className="flex items-center gap-2">
          <File className="h-4 w-4" />
          <span className="text-sm">{fileName}</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onRemoveFile}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};