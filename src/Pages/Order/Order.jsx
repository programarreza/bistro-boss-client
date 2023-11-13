import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../../components/OrderTab/OrderTab";
import Cover from "../../components/shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salads', 'pizza', 'soups', 'dessert', 'drinks'];
  const {category} = useParams()
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  // console.log(category);
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  
  return (
    <div className="">
       <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img="https://i.postimg.cc/NFYL7TbJ/order.jpg"
        title={"Order Food"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"text-center py-2 bg-slate-200 max-w-sm mx-auto rounded-sm text-[#BB8506] font-semibold text-lg"}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
			<OrderTab items={pizza}></OrderTab>
		</TabPanel>
        <TabPanel>
			<OrderTab items={soups}></OrderTab>
		</TabPanel>
        <TabPanel>
			<OrderTab items={desserts}></OrderTab>
		</TabPanel>
        <TabPanel>
			<OrderTab items={drinks}></OrderTab>
		</TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
