import SectionTitle from "../SectionTitle/SectionTitle";

const ChefRecommends = () => {
  return (
    <div className="px-12 mb-24">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"chef recommends"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[320px]"
              src="https://i.postimg.cc/XvvrMpvh/slide5.jpg"
              alt="Caeser Salad"
            />
          </figure>
          <div className="card-body my-6 ">
            <h2 className="card-title  mx-auto">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 bg-[#E8E8E8] border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[320px]"
              src="https://i.postimg.cc/XvvrMpvh/slide5.jpg"
              alt="Caeser Salad"
            />
          </figure>
          <div className="card-body my-6 ">
            <h2 className="card-title  mx-auto">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 bg-[#E8E8E8] border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-[320px]"
              src="https://i.postimg.cc/XvvrMpvh/slide5.jpg"
              alt="Caeser Salad"
            />
          </figure>
          <div className="card-body my-6 ">
            <h2 className="card-title  mx-auto">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 bg-[#E8E8E8] border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
