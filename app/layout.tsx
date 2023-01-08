import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-auto w-full sm:w-[48rem] text-zinc-800">
        <main>
          <h1 className="text-center font-bold text-xl mb-2">
            Animating buttons onClick with Tailwind CSS
          </h1>
          <p>
            This is a simple example of how to animate a button onClick with
            Tailwind CSS.
          </p>

          <a
            className="font-medium focus:text-zinc-600"
            href="https://github.com/cuevatnt/animation-with-tailwind-in-next-js"
          >
            Go to the repo
          </a>

          <Navbar />

          <div className="mt-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
