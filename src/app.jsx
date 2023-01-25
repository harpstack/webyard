import React from "react";
import ReactDOM from "react-dom/client";

import Sidebar from "./layouts/Sidebar";
import Headbar from "./layouts/Headbar";
import Main from "./layouts/Main";

import "./app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen flex font-serif bg-stone-800 text-stone-100">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Headbar />
        <Main />
      </div>
    </div>
  </React.StrictMode>
);
