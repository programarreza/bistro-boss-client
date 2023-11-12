import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../../components/Menu/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  //   console.log(soup);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={"https://i.postimg.cc/pTMXJrb7/banner3.jpg"}
        title={"our menu"}
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's offer"
      ></SectionTitle>

      {/* offered menu item */}
      <MenuCategory items={offered} ></MenuCategory>

      {/* dessert menu item */}
      <MenuCategory
        img={"https://i.postimg.cc/qM0026nK/dessert-bg.jpg"}
        items={desserts}
        title={"dessert"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* pizza menu item */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        img={"https://i.postimg.cc/jqkqYSJn/pizza-bg.jpg"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* salads menu item */}
      <MenuCategory
        items={salad}
        title={"salads"}
        img={"https://i.postimg.cc/L4TJGSmr/salad-bg.jpg"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* soups menu item */}
      <MenuCategory
        items={soups}
        title={"soups"}
        img={"https://i.postimg.cc/s24z1VHz/soup-bg.jpg"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
