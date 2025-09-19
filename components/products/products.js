import Link from "next/link";
import styles from "./products.module.scss";

const boxes = [
  {
    name: "Essentials Box",
    desc: "Compact kit with all your travel basics.",
    price: "₦25,000",
  },
  {
    name: "Business Box",
    desc: "Smart travel gear for professionals on the move.",
    price: "₦40,000",
  },
  {
    name: "Adventure Box",
    desc: "Packed for outdoor trips and bold adventures.",
    price: "₦35,000",
  },
];

export default function Products() {
  return (
    <section id="shop" className={styles.products}>
      <h2 className={styles.heading}>Choose Your Travel Box</h2>
      <div className={styles.grid}>
        {boxes.map((box, i) => (
          <div key={i} className={styles.card}>
            <h3>{box.name}</h3>
            <p>{box.desc}</p>
            <span className={styles.price}>{box.price}</span>
            <Link
              href="https://wa.me/234XXXXXXXXXX"
              className={styles.buyBtn}
            >
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}