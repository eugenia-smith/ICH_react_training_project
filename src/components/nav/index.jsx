import styles from "./styles.module.css";
import cooljob_icon from "../../assets/icons/cooljob_icon.svg";

function Nav() {
  return (
    <div className={styles.nav_container}>
      <picture>
        <img src={cooljob_icon} alt="cooljob logo" />
      </picture>
      <div className={styles.nav_menu}>
        <div>
          <a className={styles.login_link} href="">
            Job search
          </a>
          <a className={styles.login_link} href="">
            Start-Up Search
          </a>
        </div>
        <div>
          <a href="">Register</a>
          <button className={styles.login_button} type="button">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
