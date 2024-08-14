import styles from "./styles.module.css";

function Category_card({ icon, topic }) {
  return (
    <article className={styles.category_item}>
      <picture className={styles.category_img}>
        <img src={icon} />
      </picture>
      <h3 className={styles.category_heading}>{topic}</h3>
    </article>
  );
}

export default Category_card;
