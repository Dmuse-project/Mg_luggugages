import Link from "next/link";
import styles from "./cta.module.scss";

export default function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <h3>Your journey starts here.</h3>
      <Link href="/#shop" className={styles.btn}>
        Order Now
      </Link>
    </section>
  );
}