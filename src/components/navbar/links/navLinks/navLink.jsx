"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

function NavLinksModule({ item }) {
  const pathName = usePathname(); // Añade los paréntesis para invocar la función
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}

export default NavLinksModule;
