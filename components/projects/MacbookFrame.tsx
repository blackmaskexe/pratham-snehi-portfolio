import React from "react";

export default function MacbookFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-0 m-0">
      <div
        className="relative bg-black rounded-xl shadow-2xl overflow-hidden"
        style={{
          width: "90vw",
          height: "90vh",
          border: "10px solid #1a1a1a",
          borderRadius: "18px",
        }}
      >
        {/* Screen Area */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black rounded-t-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
