import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/pricing",
    label: "Pricing",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  return (
    <div className='flex bg-blue-800 gap-x-5 bg-opacity-30 p-2 m-2 rounded'>
      <Link href='/' className='flex-1 w-1/5 flex items-center gap-x-1'>
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>
      {navItems.map((item) => (
        <ActiveLink key={item.path} texto={item.label} path={item.path} />
      ))}
    </div>
  );
};
