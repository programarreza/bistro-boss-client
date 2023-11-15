import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser, updateUserProfile } = useAuth();
const  navigate = useNavigate()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
     .then((result) => {
      toast.success("SignUp Successfully");
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile update");
          reset();
          navigate('/')
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

      <div className="w-full min-h-screen bg-[url('https://i.postimg.cc/6pQTsdwS/authentication.png')] bg-cover bg-center">
        <div className="hero  pt-8">
          <div className="hero-content flex flex-row-reverse shadow-2xl rounded-xl border-t-4 px-24 gap-24">
            <div className="text-center lg:text-left w-1/2">
              <img
                className=""
                src="https://i.postimg.cc/8c3CPKhs/authentication2.png"
                alt=""
              />
            </div>
            <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h2 className="text-center text-3xl font-bold">Sign Up</h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-[#D1A054]">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-[#D1A054]">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-[#D1A054]">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-[#D1A054]">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-[#D1A054]">
                      Password must be 6 Character
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-[#D1A054]">
                      Password must be lessden 20 Character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-[#D1A054]">
                      Password must have one upper case one lower carse, one
                      number and one special character
                    </p>
                  )}
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
                    className="btn bg-[#D1A054B3] text-white hover:text-black"
                  >
                    Sign Up
                  </button>
                  <p className="text-[#D1A054] text-center mt-2">
                    Already registered?{" "}
                    <Link to={"/login"}>
                      <span className="font-semibold">Go to log in</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
