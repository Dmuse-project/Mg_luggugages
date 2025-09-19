import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Travel Smarter with MG Luggages</h1>
        <p className={styles.subtitle}>
          Curated travel boxes with everything you need for your next trip.
        </p>
        <a href="/#shop" className={styles.cta}>
          Shop Now
        </a>
      </div>
    </section>
  );
}