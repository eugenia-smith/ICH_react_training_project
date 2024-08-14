import styles from "./styles.module.css";
import Banner from "./banner";
import Sponsors from "./sponsors";
import Offers from "./offers";

function Main() {
  return (
    <div className={styles.main_wrapper}>
      <Banner />
      <Sponsors />
      <Offers />
    </div>
  );
}

export default Main;
