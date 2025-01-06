import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, delay, infinite = false, styles }) => {
  const [currentText, setCurrentText] = useState("");
  const [visibleLines, setVisibleLines] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const maxLines = 2; // Number of lines to display at a time

  useEffect(() => {
    // Reset animation whenever the text prop changes
    setCurrentText("");
    setVisibleLines([]);
    setStartIndex(0);
  }, [text]);

  useEffect(() => {
    let interval;

    const updateVisibleLines = () => {
      const lines = text.split("\n"); // Split text by newlines
      const endIndex = startIndex + maxLines; // Determine end index based on maxLines
      const nextVisibleLines = lines.slice(startIndex, endIndex); // Extract visible lines

      setVisibleLines(nextVisibleLines);

      if (endIndex >= lines.length && !infinite) {
        clearInterval(interval); // Stop cycling when reaching the end and infinite is false
      } else {
        setStartIndex((prev) =>
          endIndex >= lines.length ? 0 : prev + maxLines
        ); // Cycle back if needed
      }
    };

    // Initial typing effect
    const initialTimeout = setTimeout(() => {
      setCurrentText(text); // Set the full text to start cycling
    }, delay * text.length);

    // Start cycling lines
    interval = setInterval(updateVisibleLines, delay * maxLines);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [text, delay, maxLines, infinite, startIndex]);

  return (
    <div className={styles}>
      {visibleLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

export default TypingAnimation;
