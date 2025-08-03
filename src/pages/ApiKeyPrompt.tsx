import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const ApiKeyPrompt = () => {
  const [apiKey, setApiKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      localStorage.setItem("openRouterApiKey", apiKey.trim());
      navigate("/chat");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">TAR.UA - Your Pocket AI</CardTitle>
          <CardDescription className="text-gray-300">
            Enter your OpenRouter API key to start chatting with our AI assistant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-1">
                  OpenRouter API Key
                </label>
                <Input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your API key"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div className="text-sm text-gray-400">
                <p>
                  Don't have an API key? Visit{" "}
                  <a 
                    href="https://openrouter.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    OpenRouter
                  </a>{" "}
                  to get one.
                </p>
              </div>
            </div>
            <Button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
              Start Chatting
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-gray-400 text-center">
            <p>
              TAR.UA is an innovative chat application that brings the power of AI to your fingertips. 
              With its sleek dark-themed interface and advanced features, TAR.UA allows you to have 
              meaningful conversations with an AI assistant, upload files for context-aware responses, 
              and manage multiple conversations seamlessly.
            </p>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            <p>
              By using this application, you agree to the terms of service of the AI providers.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};