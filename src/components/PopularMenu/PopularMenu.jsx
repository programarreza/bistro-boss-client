import useMenu from "../../hooks/useMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../shared/MenuItem/MenuItem";

const PopularMenu = () => {
	const [menu] = useMenu();
	const popular = menu.filter(item => item.category === 'popular')

	return (
		<section className="px-12 my-12">
			<SectionTitle
			subHeading={"Check it out"}
			heading={'FROM OUR MENU'}
			></SectionTitle>

			<div className="grid md:grid-cols-2 gap-5 ">
				{
					popular.map(item => <MenuItem 
						key={item._id} 
						item={item}
						></MenuItem>)
				}
				
			</div>
			<button className="btn  mt-5 flex justify-center text-center mx-auto btn-outline  border-0 border-b-4">Order now</button>
			
		</section>
	);
};

export default PopularMenu;