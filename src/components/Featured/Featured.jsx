import SectionTitle from "../SectionTitle/SectionTitle";


const Featured = () => {
	return (
		<div className="w-full h-screen bg-fixed  bg-[url('https://i.postimg.cc/pLy9J63w/featured.jpg')] bg-cover bg-center">
			<div className="w-full h-full text-white  
             bg-[#585858]/30 backdrop-brightness-75 pt-12">
			<SectionTitle
			subHeading={"Check it out"}
			heading={"featured menu"}
			></SectionTitle>

			<div className="flex max-w-4xl gap-12 mx-auto">
				<img className="w-1/2" src="https://i.postimg.cc/pLy9J63w/featured.jpg" alt="" />
				<div>
					<h2>March 20, 2023</h2>
					<h3 className="uppercase">where can i get some?</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ex odit sapiente doloribus quis tempora nemo provident recusandae ad. Deleniti debitis eligendi voluptate iure architecto quas placeat dignissimos excepturi explicabo.</p>
					<button className="btn mt-12 btn-outline text-white border-0 border-b-4">Order now</button>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Featured;