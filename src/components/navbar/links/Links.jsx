"use client";

import Link from "next/link";
import styles from "./links.module.css";
import NavLinksModule from "./navLinks/navLink";
import { useState } from "react";

function Links() {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //Temporal lo vamos a cambiar
  const sesion = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinksModule item={link} key={link.title} />
        ))}

        {/* Renderización condicional utilizando un bloque de código */}
        {sesion ? (
          <>
            {isAdmin && (
              <NavLinksModule item={{ title: "Admin", path: "/admin" }} />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinksModule item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLinksModule item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
