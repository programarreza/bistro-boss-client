import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSocialLogin = (googleLogin) => {
    googleLogin().then((result) => {
      console.log(result.user);
      toast.success("login successful");
      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName,
      };
      axiosPublic.post("/api/v1/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div>
      <div className="ml-4 mb-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="p-2  flex items-center gap-2 text-xl font-bold border-2 rounded border-[#727171]"
        >
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
