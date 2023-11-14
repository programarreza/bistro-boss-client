/* eslint-disable react/prop-types */
// import SectionTitle from "../SectionTitle/SectionTitle";

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, price, recipe, _id, name, category } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddItem = () => {
    if (user && user.email) {
      //  send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        category,
        image,
        price,
        recipe,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success(`${name} add to cart Successfully`);
            refetch();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-[320px] relative"
          src={image}
          alt="Caeser Salad"
        />
      </figure>
      <p className="absolute bg-gray-800 text-white px-3 py-1 rounded-md right-0 m-4">
        ${price}
      </p>
      <div className="card-body my-6 ">
        <h2 className="card-title  mx-auto">{item?.name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddItem}
            className="btn btn-outline border-0 bg-[#E8E8E8] border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
