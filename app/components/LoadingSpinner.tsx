import React from "react";
import { FaGear } from "react-icons/fa6";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center space-x-3 h-full flex-col">
    <FaGear className="animate-spin h-24 w-24 text-blue-500 rounded-full" />
    <h1 className="[font-family:var(--primary-font)] mt-3 font-black">
      Summarizing...
    </h1>
  </div>
);

export default LoadingSpinner;
