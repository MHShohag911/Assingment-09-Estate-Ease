import { Helmet } from "react-helmet-async";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGithub, FaTwitter } from "react-icons/fa";

function UserProfile() {
  const { user } = useContext(AuthContext);
  return (
    <section className="md:container mx-auto p-5 md:px-8 md:py-10">
      <Helmet>
        <title>Estate Ease | User Profile</title>
      </Helmet>
      <Card shadow={false} className="border border-gray-300 rounded-2xl">
        <CardHeader shadow={false} className="h-60 !rounded-lg mt-4">
          <img src={user?.photoURL} className="w-full  object-center" alt="" />
        </CardHeader>
        <CardBody>
          <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar src={user?.photoURL} alt="avatar" variant="rounded" />
              <div>
                <Typography color="blue-gray" className="text-primary" variant="h6">
                  {user?.displayName}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {user?.email}
                </Typography>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              ><FaGithub className="text-xl"></FaGithub>
                <i className="fa fa-github text-base" />
                Github
              </Button>
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              ><FaTwitter className="text-xl text-light-blue-600"></FaTwitter>
                <i className="fa-brands fa-twitter" />
                Twitter
              </Button>
            </div>
          </div>
          <Typography
            variant="small"
            className="font-normal text-gray-600 mt-6"
          >
            Passionate Web Developer focused on creating intuitive and engaging
            digital experiences. <br /> Driven by design and development thinking, creativity,
            and a love for problem-solving.
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}

export default UserProfile;
