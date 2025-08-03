import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Index from "./Index";

const ChatWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = localStorage.getItem("openRouterApiKey");
    if (!apiKey) {
      navigate("/api-key");
    }
  }, [navigate]);

  return <Index />;
};

export default ChatWrapper;