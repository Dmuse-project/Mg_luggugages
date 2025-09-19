import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} MG Luggages · All Rights Reserved</p>
      <div className={styles.links}>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <Link href="https://instagram.com/">Instagram</Link>
        <Link href="https://wa.me/234XXXXXXXXXX">WhatsApp</Link>
      </div>
    </footer>
  );
}