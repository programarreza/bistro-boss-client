import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Featured from "../../components/Featured/Featured";
import PopularMenu from "../../components/PopularMenu/PopularMenu";


const Home = () => {
	return (
		<div>
			<Banner/>
			<Category/>
			<PopularMenu/>
			<Featured/>
		</div>
	);
};

export default Home;