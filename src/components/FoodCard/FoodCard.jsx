// import SectionTitle from "../SectionTitle/SectionTitle";

const FoodCard = ({ item }) => {
  const { image, price, recipe } = item;
  
  console.log(item);

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[320px] relative" src={image} alt="Caeser Salad" />
      </figure>
		<p className="absolute bg-gray-800 text-white px-3 py-1 rounded-md right-0 m-4">${price}</p>
      <div className="card-body my-6 ">
        <h2 className="card-title  mx-auto">{item?.name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 bg-[#E8E8E8] border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
