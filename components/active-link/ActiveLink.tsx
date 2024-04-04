"use client"
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  path: string;
  texto: string;
}

export const ActiveLink = ({ path, texto }: ActiveLinkProps) => {
  const currentPath = usePathname();
  return (
    <Link className={`${style.link} ${currentPath === path && style["active-link"]}`} href={path}>
      {texto}
    </Link>
  );
};
