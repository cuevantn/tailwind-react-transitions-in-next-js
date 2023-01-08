"use client";

const ButtonB = () => {
  return (
    <button
      className="bg-red-500 rounded px-4 py-2 transition duration-250 transform"
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
