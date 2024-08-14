import styles from "./styles.module.css";
import Banner from "./banner";
import Sponsors from "./sponsors";

function Main() {
  return (
    <div className={styles.main_wrapper}>
      <Banner />
      <Sponsors />
    </div>
  );
}

export default Main;
