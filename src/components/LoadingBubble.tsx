import './LoadingBubble.css';

export const LoadingBubble = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0"></div>
      <div className="flex items-center space-x-1">
        <span className="text-muted-foreground">TAR.UA is thinking</span>
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};