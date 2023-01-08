import { CodeViewer } from "../components";
import ButtonB from "./button";

const code = `"use client";

const ButtonB = () => {
  return (
    <button
      className="bg-red-500 rounded-full w-32 h-8 transition duration-250 transform"
      onClick={(e) => {
        let button = e.target as HTMLButtonElement;

        if (button.classList.contains("bg-green-500")) {
          button.classList.remove("bg-green-500", "scale-150");
        } else {
          button.classList.add("bg-green-500", "scale-150");
        }
      }}
    >
      Click me!
    </button>
  );
};

export default ButtonB;
`;

const Page = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-32">
        <ButtonB />
      </div>
      <CodeViewer code={code} />
    </div>
  );
};

export default Page;
