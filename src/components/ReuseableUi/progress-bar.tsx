import React from "react";

const ProgressBar: React.FC<{ value: any }> = ({ value }) => {
  const progressValue = Math.min(Math.max(value, 0), 100); // ensure value is between 0 and 100

  return (
    <div className="w-full bg-[#001A33] h-3 overflow-hidden rounded-[20px]">
      <div
        className="bg-gray-400 h-full text-center flex items-center justify-center"
        style={{
          width: `${progressValue}%`,
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
