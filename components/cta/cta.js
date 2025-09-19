import styles from "./cta.module.scss";

export default function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <h3>Your journey starts here.</h3>
      <a href="/#shop" className={styles.btn}>
        Order Now
      </a>
    </section>
  );
}