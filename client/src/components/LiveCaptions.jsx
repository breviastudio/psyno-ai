import React from "react";
import TypingAnimation from "./TypingAnimation";

export const LiveCaptions = ({ isLoading, response, error }) => {
  return (
    <div className="absolute bg-white/10 rounded-lg p-2 backdrop-blur-sm m-16">
      {error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <div className="text-white">
          {isLoading ? (
            <TypingAnimation
              text="..."
              delay={100}
              infinite
              styles={"font-bold text-[#722f37]"}
            />
          ) : (
            <TypingAnimation text={response} delay={82.5} />
          )}
        </div>
      )}
    </div>
  );
};
