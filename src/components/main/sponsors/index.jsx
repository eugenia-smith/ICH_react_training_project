import styles from "./styles.module.css";
import cola from "../../../assets/icons/coca_cola_logo_item.svg";
import disney from "../../../assets/icons/disney_logo_icon.svg";
import microsoft from "../../../assets/icons/microsoft_logo_icon.svg";
import facebook from "../../../assets/icons/facebook_logo_icon.svg";
import sony from "../../../assets/icons/sony_logo_icon.svg";

function Sponsors() {
  return (
    <section className={styles.sponsors_container}>
      <h2 className={styles.sponsors_heading}>Our clients are:</h2>
      <ul className={styles.logo_container}>
        <li className={styles.logo}>
          <img src={disney} alt="Disney logo" />
        </li>
        <li className={styles.logo}>
          <img src={facebook} alt="Facebook logo" />
        </li>
        <li className={styles.logo}>
          <img src={microsoft} alt="Microsoft logo" />
        </li>
        <li className={styles.logo}>
          <img src={sony} alt="Sony logo" />
        </li>
        <li className={styles.logo}>
          <img src={cola} alt="Coca-Cola logo" />
        </li>
      </ul>
    </section>
  );
}

export default Sponsors;
