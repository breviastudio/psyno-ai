import React from "react";
import TypingAnimation from "./TypingAnimation";

export const LiveCaptions = ({ isLoading, response, error }) => {
  return (
    <div className="absolute flex items-center justify-center bg-white/10 rounded-lg p-2 backdrop-blur-sm m-16 w-[35rem]">
      {error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <div className="text-[#722f37] font-medium text-lg">
          {isLoading ? (
            <TypingAnimation
              text="..."
              delay={100}
              infinite
              styles={"font-bold text-[#722f37]"}
            />
          ) : (
            <TypingAnimation text={response} delay={70} />
          )}
        </div>
      )}
    </div>
  );
};
