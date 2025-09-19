import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} MG Luggages · All Rights Reserved</p>
      <div className={styles.links}>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="https://instagram.com/">Instagram</a>
        <a href="https://wa.me/234XXXXXXXXXX">WhatsApp</a>
      </div>
    </footer>
  );
}