import styles from "./howItWorks.module.scss";

const steps = [
  "Pick your travel box",
  "Customize with extras (optional)",
  "Get it delivered before your trip",
];

export default function HowItWorks() {
  return (
    <section className={styles.how} id="how">
      <h2 className={styles.heading}>How It Works</h2>
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <span className={styles.number}>{i + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}