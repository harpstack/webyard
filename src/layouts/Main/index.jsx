import React from "react";

export default function Main() {
  return (
    <div className="flex-grow bg-stone-100 text-stone-800">
      <iframe
        className="w-full h-full"
        name="frame"
        src="./pages/dashboard.html"
      ></iframe>
    </div>
  );
}
