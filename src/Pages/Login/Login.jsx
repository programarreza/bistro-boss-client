import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // console.log("state in the location login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    login(email, password)
      .then((result) => {
        toast.success("Login Successfully");
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;

    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="w-full min-h-screen bg-[url('https://i.postimg.cc/6pQTsdwS/authentication.png')] bg-cover bg-center">
        <div className="hero  pt-8">
          <div className="hero-content flex shadow-2xl rounded-xl border-t-4 px-24 gap-24">
            <div className="text-center lg:text-left w-1/2">
              <img
                className=""
                src="https://i.postimg.cc/8c3CPKhs/authentication2.png"
                alt=""
              />
            </div>
            <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl ">
              <form onSubmit={handleLogin} className="card-body">
                <h2 className="text-center text-3xl font-bold">Login</h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="type the captcha above"
                    className="input input-bordered "
                    
                  />
                </div>
                <div className="form-control mt-2">
                  {/* TODO: apply disabled for re captcha value true */}
                  <button
                    disabled={false}
                    type="submit"
                    className="btn bg-[#D1A054B3] text-white hover:text-black"
                  >
                    Sign In
                  </button>
                  <p className="text-[#D1A054] text-center mt-2">
                    New here?{" "}
                    <Link to={"/signup"}>
                      <span className="font-semibold">
                        Create a New Account
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
              <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
