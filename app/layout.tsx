import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className='mx-auto text-zinc-800 space-x-4 font-bold'>
          <Link href="/buttons/a">Button A</Link>
          <Link href="/buttons/b">Button B</Link>
        </nav>
        {children}</body>
    </html>
  )
}
