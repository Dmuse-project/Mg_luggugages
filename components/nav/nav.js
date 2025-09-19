"use client";
import { useState } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">MG Luggages</Link>
      </div>

      {/* Hamburger Menu */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Links */}
      <ul className={`${styles.links} ${open ? styles.show : ""}`}>
        <li><Link href="/#shop">Shop</Link></li>
        <li><Link href="/#features">Features</Link></li>
        <li><Link href="/#how">How It Works</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
        <li>
          <Link href="/#shop" className={styles.ctaBtn}>
            Order Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}