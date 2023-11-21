import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Container from "../../../components/Container/Container";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/api/v1/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        toast.success(`${data.name} is Added to the menu`);
      }
    }
    console.log(res);
  };

  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <Container>
        <div className="bg-[#F3F3F3] p-12 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Recipe Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Recipe Name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full "
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* category */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Category*</span>
                  </label>
                  <select
                    defaultValue="default"
                    {...register("category", { required: true })}
                    className="select select-bordered w-full "
                  >
                    <option disabled value={"default"}>
                      Select a category
                    </option>
                    <option value="salad">Salad</option>
                    <option value="pizza">pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>

                {/* price */}
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Price*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    {...register("price", { required: true })}
                    className="input input-bordered w-full "
                  />
                </div>
              </div>

              {/* recipe details */}
              <div className="form-control w-full my-6">
                <textarea
                  {...register("recipe", { required: true })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Recipe Details"
                ></textarea>
              </div>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>

            <button
              type="submit"
              value={"Add Item"}
              className="flex items-center bg-gradient-to-r from-[#835D23] to-[#B58130] text-xl font-bold text-white px-5 py-3 rounded-md mt-5"
            >
              Add Item <FaUtensils />
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddItems;
