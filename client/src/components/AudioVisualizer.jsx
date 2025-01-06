import React from "react";
import { LiveCaptions } from "./LiveCaptions";
import { VisualizerBars } from "./VisualizerBars";

const AudioVisualizer = ({ audioData, isLoading, response, error }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-6">
      <VisualizerBars audioData={audioData} />
      <LiveCaptions isLoading={isLoading} response={response} error={error} />
    </div>
  );
};

export default AudioVisualizer;
