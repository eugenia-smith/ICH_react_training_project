import styles from "./styles.module.css";
import finance_icon from "../../../../assets/icons/finance_icon.svg";
import logistics_icon from "../../../../assets/icons/logistics_icon.svg";
import design_icon from "../../../../assets/icons/design_icon.svg";
import catering_icon from "../../../../assets/icons/catering_icon.svg";
import medicine_icon from "../../../../assets/icons/medicine_icon.svg";
import multimedia_icon from "../../../../assets/icons/multimedia_icon.svg";
import tech_support_icon from "../../../../assets/icons/tech_support_icon.svg";
import management_icon from "../../../../assets/icons/management_icon.svg";
import sales_icon from "../../../../assets/icons/sales_icon.svg";
import more_icon from "../../../../assets/icons/more_icon.svg";
import Category_card from "./category_card";

function Categories() {
  const categoriesArray = [
    {
      id: 1,
      icon: finance_icon,
      topic: "Finance",
    },
    {
      id: 2,
      icon: logistics_icon,
      topic: "Logistics",
    },

    {
      id: 3,
      icon: design_icon,
      topic: "Design",
    },

    {
      id: 4,
      icon: catering_icon,
      topic: "Catering",
    },

    {
      id: 5,
      icon: medicine_icon,
      topic: "Medicine",
    },

    {
      id: 6,
      icon: multimedia_icon,
      topic: "Multimedia",
    },

    {
      id: 7,
      icon: tech_support_icon,
      topic: "Tech Support",
    },

    {
      id: 8,
      icon: management_icon,
      topic: "Management",
    },

    {
      id: 9,
      icon: sales_icon,
      topic: "Sales",
    },

    {
      id: 10,
      icon: more_icon,
      topic: "More",
    },
  ];

  return (
    <div className={styles.categories_part}>
      <h2 className={styles.categories_heading}>Discover top categories:</h2>
      <div className={styles.categories_list}>
        {categoriesArray.map((elem) => {
          return (
            <Category_card key={elem.id} icon={elem.icon} topic={elem.topic} />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
