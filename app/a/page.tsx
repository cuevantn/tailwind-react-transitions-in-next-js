import ButtonA from "./button";
import { CodeViewer } from "../components";

const code = `"use client";

import { useState } from "react";

const ButtonA = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={
        "bg-blue-500 rounded-full w-32 h-8 transition duration-250 transform " +
        (clicked ? "scale-50" : "")
      }
      onClick={() => setClicked(!clicked)}
    >
      Click me!
    </button>
  );
};

export default ButtonA;
`;

export default function App() {
  return (
    <div>
      <div className="flex justify-center items-center h-32">
        <ButtonA />
      </div>
      <CodeViewer code={code} />
    </div>
  );
}
