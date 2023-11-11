import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import ChefRecommends from "../../components/ChefRecommends/ChefRecommends";
import ChefService from "../../components/ChefService/ChefService";
import Contact from "../../components/Contact/Contact";
import Featured from "../../components/Featured/Featured";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
	return (
		<div>
			<Banner/>
			<Category/>
			<ChefService/>
			<PopularMenu/>
			<Contact/>
			<ChefRecommends/>
			<Featured/>
			<Testimonials/>
		</div>
	);
};

export default Home;