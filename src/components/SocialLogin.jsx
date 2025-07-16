import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  const handleSocialLogin = () => {
    console.log("HELLO");
    toast.success("Login Successfully");
  };
  return (
    <div>
      <button
        onClick={handleSocialLogin}
        className="bg-gray-200 w-full rounded-full shadow transition mt-5 flex items-center justify-center gap-2 py-2"
        aria-label="গুগলের মাধ্যমে লগইন করুন"
      >
        <FcGoogle className="text-xl" />
        <span className="text-sm font-medium text-gray-700">
          গুগলের মাধ্যমে লগইন করুন
        </span>
      </button>
    </div>
  );
};
export default SocialLogin;
