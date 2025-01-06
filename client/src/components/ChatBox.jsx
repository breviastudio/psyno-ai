import React, { useState } from "react";
import { Send } from "lucide-react";

export const ChatBox = ({ isLoading, handleSubmit }) => {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full max-w-lg m-5">
      <form
        onSubmit={(e) => handleSubmit(e, message, setMessage)}
        className="flex"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your emotion..."
          className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-[#722f37] border border-[#722f37] placeholder-[#722f37] outline-none border-r-0 rounded-tr-none rounded-br-none"
          disabled={isLoading}
          autoFocus
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 rounded-lg bg-white/10 text-[#722f37] border border-[#722f37] border-l-0 rounded-tl-none rounded-bl-none"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
