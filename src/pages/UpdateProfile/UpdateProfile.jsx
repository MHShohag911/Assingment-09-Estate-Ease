import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export function UpdateProfile() {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    //   const email = form.get("email");
    const photoURL = form.get("photoURL");
    //   const password = form.get("password");
    //   const accepted = form.get("terms");
    console.log("the value is", name, photoURL);

    // Reset Error
    setRegisterError("");
    setSuccess("");
    if (user) {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      Swal.fire({
        title: "Congrats!!!",
        text: "Successfully Updated Your Profile",
        icon: "success",
        draggable: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  };

  useEffect(()=>{
    const userName = user.displayName;
    setName(userName);
    const userPhoto = user.photoURL;
    setPhotoURL(userPhoto);
  }, [])

  return (
    <div className="flex justify-center mt-20">
      <Helmet>
        <title>Estate Ease | Update Profile</title>
      </Helmet>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="" className="text-primary">
          Update Your Profile
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Welcome! Edit Your Profile If You Want.
        </Typography>
        <form
          onSubmit={handleUpdate}
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
            {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
              size="lg"
              placeholder={user?.email}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
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
            {/* <div className="relative">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Password
              </Typography>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                size="lg"
                placeholder="Enter Password to Continue"
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
            </div> */}
          </div>
          <div>
            <Button type="submit" className="mt-6" fullWidth>
              update profile
            </Button>
            {registerError && <p className="text-red-700">{registerError}</p>}
            {success && <p className="text-green-600">{success}</p>}
          </div>
        </form>
      </Card>
    </div>
  );
}
