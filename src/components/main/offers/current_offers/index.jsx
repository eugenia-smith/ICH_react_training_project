import styles from "./styles.module.css";
import sony_current from "../../../../assets/icons/sony_current_icon.svg";
import facebook_current from "../../../../assets/icons/facebook_current_icon.svg";
import cola_current from "../../../../assets/icons/cola_current_icon.svg";
import Offer_card from "./offer_card";

function Current_offers() {
  const currentOffersArray = [
    {
      color: "#5182FF",
      topic: "Finance",
      position: "Accounting manager at a group of companies",
      location: "Osaka, Japan",
      employer_icon: sony_current,
      posted: "Sony, 3 days ago",
    },

    {
      color: "#FF51EE",
      topic: "Sales",
      position: "Sales manager",
      location: "Koyasan, Japan",
      employer_icon: facebook_current,
      posted: "Facebook, 7 days ago",
    },

    {
      color: "#58D94D",
      topic: "Tech Support",
      position: "Support engineer",
      location: "Tomamy, Japan",
      employer_icon: cola_current,
      posted: "CocaCola, yesterday",
    },

    {
      color: "#FF9051",
      topic: "Multimedia",
      position: "System administration",
      location: "Tokio, Japan",
      employer_icon: sony_current,
      posted: "Sony, 3 days ago",
    },

    {
      color: "#F84242",
      topic: "Design",
      position:
        "Interior Designer (community of profies, located in the heart of the city)",
      location: "Yokohama, Japan",
      employer_icon: facebook_current,
      posted: "Facebook, 7 days ago",
    },

    {
      color: "#383838",
      topic: "Logistics",
      position: "Truck driver (long distance)",
      location: "Kobe, Japan",
      employer_icon: cola_current,
      posted: "CocaCola, 3 days ago",
    },
  ];

  return (
    <div className={styles.current_offers_container}>
      <h2 className={styles.current_offers_heading}>They are hiring:</h2>
      <p className={styles.current_offers_description}>
        Apply for the job of your dream now!
      </p>
      <div className={styles.offer_card_container}>
        {currentOffersArray.map((elem) => {
          return (
            <Offer_card
              id={elem.topic}
              color={elem.color}
              topic={elem.topic}
              position={elem.position}
              location={elem.location}
              icon={elem.employer_icon}
              posted={elem.posted}
            />
          );
        })}
      </div>
      <a className={styles.more_offers_button} href="#">
        More offers
      </a>
    </div>
  );
}

export default Current_offers;
