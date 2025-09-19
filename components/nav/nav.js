"use client";
import { useState } from "react";
import styles from "./nav.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <a href="/">MG Luggages</a>
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
        <li><a href="/#shop">Shop</a></li>
        <li><a href="/#features">Features</a></li>
        <li><a href="/#how">How It Works</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li>
          <a href="/#shop" className={styles.ctaBtn}>
            Order Now
          </a>
        </li>
      </ul>
    </nav>
  );
}