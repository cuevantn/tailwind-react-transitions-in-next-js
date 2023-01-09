"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: string }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={pathname === href ? "text-red-500" : ""}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-between font-bold my-2">
      <NavLink href="/">Home</NavLink>

      <div className="flex space-x-8">
        <NavLink href="/a">Button A</NavLink>
        <NavLink href="/b">Button B</NavLink>
        <NavLink href="/follow">Follow Button</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
