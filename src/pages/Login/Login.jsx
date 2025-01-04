import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export function Login() {
  const { signIn, signInWithGoogle, signInWithTwitter } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log("The value is", email, password);

    setLoginError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Welcome Back!",
          text: "Successfully Sign In to Your Account",
          icon: "success",
        });
        if (result.user) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        setLoginError(error.message);
        toast.error("Email or Password is Incorrect", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user.photoURL)
        Swal.fire({
          title: "Congrats!!!",
          text: "Successfully Login to Your Account",
          icon: "success",
        });
        if (result.user) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleTwitterSignIn = () => {
      signInWithTwitter()
        .then((result) => {
          Swal.fire({
            title: "Congrats!!!",
            text: "Successfully Login to Your Account",
            icon: "success",
          });
          if (result.user) {
            navigate(location?.state ? location.state : "/");
          }
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
    };
  return (
    <div className="flex justify-center mt-20 ">
      <Helmet>
        <title>Estate Ease | Login</title>
      </Helmet>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="" className="text-primary">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you again! Please login.
        </Typography>
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="relative">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Password
            </Typography>
            <Input
              name="password"
              type={showPassword ? 'text' : 'password'}
              size="lg"
              placeholder="Create Password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
              <span className="absolute bottom-2 right-4" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoMdEyeOff className="text-2xl text-primary"/> : <IoMdEye className="text-2xl text-primary"></IoMdEye>}</span>
            </div>
          </div>
          <div>
            <a href="#">Forgot password?</a>
            <Button type="submit" className="mt-6 mb-2" fullWidth>
              sign in
            </Button>
            {loginError && <p className="text-red-700">{loginError}</p>}
            {success && <p className="text-green-600">{success}</p>}
            <div>
              <h2 className="uppercase text-center my-5">or login with</h2>
              <div className="flex  items-center justify-center gap-4">
                <Button
                  size="lg"
                  color="white"
                  className="flex items-center gap-3 rounded-full p-2"
                >
                  <FaFacebook className="text-3xl text-[#0866FF]" />
                  {/* Facebook */}
                </Button>
                <Button
                  onClick={handleGoogleSignIn}
                  size="lg"
                  color="white"
                  className="flex items-center gap-3 rounded-full p-2"
                >
                  <FcGoogle className="text-3xl" />
                  {/* Google */}
                </Button>
                <Button
                  onClick={handleTwitterSignIn}
                  size="lg"
                  color="white"
                  className="flex items-center gap-3 rounded-full p-2"
                >
                  <FaTwitter className="text-3xl text-light-blue-600" />
                  {/* Twitter */}
                </Button>
              </div>
            </div>
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold text-primary">
              Register
            </Link>
          </Typography>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
}
