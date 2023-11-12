import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";
import Featured from "../../components/Featured/Featured";
import FoodCard from "../../components/FoodCard/FoodCard";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Testimonials from "../../components/Testimonials/Testimonials";
import Cover from "../../components/shared/Cover/Cover";


const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Home</title>
			</Helmet>
			<Banner/>
			<Category/>
			<Cover 
			img={"https://i.postimg.cc/tRtsHn64/chef-service.jpg"} 
			title={"Bistro boss"}
			description={"deserunt quidem molestias, eligendi quibusdam iusto dignissimos, laboriosam quod dolore nulla rem laborum reiciendis. Voluptatem enim, fuga doloremque vero ullam eos iusto suscipit iste quae inventore at quam, rerum saepe ipsa laudantium cum."}
			></Cover>
			<PopularMenu/>
			<Contact/>
			{/* <FoodCard/> */}
			<Featured/>
			<Testimonials/>
		
		</div>
	);
};

export default Home;