import styles from "./styles.module.css";
import Nav from "../../components/nav";
import Main from "../../components/main";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className={styles.home_container}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
