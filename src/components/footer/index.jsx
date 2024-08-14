import styles from "./styles.module.css";
import cooljob_footer_icon from "../../assets/icons/cooljob_footer_icon.svg";
import linkedin from "../../assets/icons/linkedin_footer_icon.svg";
import google_footer_icon from "../../assets/icons/google_footer_icon.svg";
import twitter_icon from "../../assets/icons/twitter_footer_icon.svg";
import facebook_footer_icon from "../../assets/icons/facebook_footer_icon.svg";

function Footer() {
  return (
    <footer className={styles.page_footer}>
      <div className={styles.popular_cities}>
        <p className={styles.cities_heading}>Popular locations</p>
        <ul className={styles.cities_list}>
          <li>
            <a href="">Osaka</a>
          </li>
          <li>
            <a href="">Koyasan</a>
          </li>
          <li>
            <a href="">Tokio</a>
          </li>
          <li>
            <a href="">Hakone</a>
          </li>
          <li>
            <a href="">Naeba</a>
          </li>
          <li>
            <a href="">Tomamy</a>
          </li>
          <li>
            <a href="">Yokohama</a>
          </li>
          <li>
            <a href="">Nagoya</a>
          </li>
          <li>
            <a href="">Sapporo</a>
          </li>
          <li>
            <a href="">Kobe</a>
          </li>
        </ul>
      </div>
      <div className={styles.social_media}>
        <picture className={styles.footer_logo}>
          <img src={cooljob_footer_icon} />
        </picture>
        <ul className={styles.social_media_links}>
          <li>
            <a href="">
              <img src={linkedin} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={google_footer_icon} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitter_icon} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={facebook_footer_icon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
