import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export function Register() {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, signInWithGoogle, signInWithTwitter, signInWithFacebook } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");
    const accepted = form.get("terms");
    console.log("the value is", name, email, photoURL, password, accepted);

    // Reset Error
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer!!!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one uppercase characters."
      );
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("Your Password must contain at least one number.");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setRegisterError("Password must contain at least one special character.");
      return;
    } else if (accepted !== "on") {
      setRegisterError("Please accept our terms and conditions");
      return;
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Congrats!!!",
            text: "Successfully Created Your Account",
            icon: "success",
          });
          updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL,
          });
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        toast.error(
          { registerError },
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
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
  const handleFacebookSignIn = () => {
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
    <div className="flex justify-center mt-20">
      <Helmet>
        <title>Estate Ease | Register</title>
      </Helmet>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="" className="text-primary">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleRegister}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              name="name"
              size="lg"
              placeholder="Something Your Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
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
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              PhotoURL
            </Typography>
            <Input
              name="photoURL"
              size="lg"
              placeholder="Provide the link...'kui/4wejlrkshaf34ioer'"
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
                type={showPassword ? "text" : "password"}
                size="lg"
                placeholder="Create Password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <span
                className="absolute bottom-2 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoMdEyeOff className="text-2xl text-primary" />
                ) : (
                  <IoMdEye className="text-2xl text-primary"></IoMdEye>
                )}
              </span>
            </div>
          </div>
          <div>
            <Checkbox
              name="terms"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-6" fullWidth>
              sign up
            </Button>
            {registerError && <p className="text-red-700">{registerError}</p>}
            {success && <p className="text-green-600">{success}</p>}
          </div>
          <div>
            <h2 className="uppercase text-center my-5">or login with</h2>
            <div className="flex  items-center justify-center gap-4">
              <Button
                onClick={handleFacebookSignIn}
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
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-primary">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
