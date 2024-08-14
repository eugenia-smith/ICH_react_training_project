import styles from "./styles.module.css";
import Categories from "./categories";
import Current_offers from "./current_offers";

function Offers() {
  return (
    <section className={styles.offers_section}>
      <h2 className={styles.visually_hidden}>Job catalogue</h2>
      <Categories />
      <Current_offers />
    </section>
  );
}

export default Offers;
