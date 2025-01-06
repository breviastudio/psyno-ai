import React, { useState } from "react";
import AudioVisualizer from "./components/AudioVisualizer";
import Navbar from "./components/Navbar";
import { useAudioInput } from "./hooks/useAudioInput";
import { ControlButton } from "./components/ControlButton";
import { ChatBox } from "./components/ChatBox";
import { speak } from "./hooks/audio";
import { sendMessage } from "./services/api";
import { LiveCaptions } from "./components/LiveCaptions";

function App() {
  const { audioData, isListening, startListening, stopListening } =
    useAudioInput();

  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSubmit = async (e, message, setMessage) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const data = await sendMessage(message);
      setResponse(data);
      speak(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between h-[100vh]">
        <Navbar />
        <AudioVisualizer
          audioData={audioData}
          isLoading={isLoading}
          response={response}
          error={error}
        />
        {/* <ControlButton isListening={isListening} onClick={toggleListening} /> */}
        <ChatBox
          response={response}
          isLoading={isLoading}
          error={error}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;
