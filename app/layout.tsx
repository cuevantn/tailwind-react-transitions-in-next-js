import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="mx-auto px-4 py-2 w-full sm:w-[48rem] text-zinc-800">
        <main>
          <h1 className="text-center font-bold text-xl mb-2">
            Tailwind CSS and React Transitions in Next.js
          </h1>
          <p className="mb-2 text-justify">
            Enhance the user experience in your Next.js and React app with
            dynamic and visually appealing transitions between styles using
            Tailwind CSS. Follow these simple steps to add flair to your buttons
            and other elements. Check out these examples to see different ways
            you can implement transitions in your app.
          </p>

          <div className="text-center font-medium italic text-zinc-600">
            <a href="https://github.com/cuevatnt/animation-with-tailwind-in-next-js">
              Link to the repo
            </a>
          </div>

          <Navbar />

          <div className="mt-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
