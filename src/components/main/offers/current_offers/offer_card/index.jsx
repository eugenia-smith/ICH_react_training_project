import styles from "./styles.module.css";

function Offer_card({ color, topic, location, position, icon, posted }) {
  return (
    <article className={styles.offer_card}>
      <header className={styles.card_category}>
        <span
          style={{
            display: "block",
            backgroundColor: color,
            width: "14px",
            height: "14px",
            borderRadius: "50%",
          }}
        ></span>
        <p className={styles.category_topic}>{topic}</p>
      </header>
      <h3 className={styles.card_heading}>{position}</h3>
      <p className={styles.card_location}>{location}</p>
      <div className={styles.card_employer}>
        <img src={icon} alt="employer's logo" />
        <p className={styles.employers_info}>{posted}</p>
      </div>
    </article>
  );
}

export default Offer_card;
