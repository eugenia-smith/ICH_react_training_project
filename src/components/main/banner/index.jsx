import styles from "./styles.module.css";

function Banner() {
  return (
    <section className={styles.banner_container}>
      <p className={styles.banner_slogan}>
        The job of your dream <br /> is just a click away
      </p>
      <div className={styles.banner_form}>
        <label className={styles.banner_form_label} htmlFor="">
          <input
            type="text"
            placeholder="Desired position or a company you like"
          />
        </label>
        <label className={styles.banner_form_label} htmlFor="">
          <input type="text" placeholder="Location" />
        </label>
        <button className={styles.banner_search_button} type="button">
          Search
        </button>
      </div>
    </section>
  );
}

export default Banner;
