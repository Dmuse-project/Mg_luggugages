import styles from "./features.module.css";

const features = [
  "All-in-one travel essentials",
  "Customizable for your trip",
  "Fast delivery nationwide",
  "Perfect gift for travelers",
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.wrapper}>
        {features.map((text, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.icon}>✈️</span>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}