import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
   
  export function ProfileCard({profile}) {
    const {id, name, designation, photoUrl} = profile;

    return (
      <Card className="w-full pb-5">
        <CardHeader floated={false} className="">
          <img src={photoUrl} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" className="mb-2 text-primary">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {designation}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-0">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <FaFacebook className="text-[#0866FF] text-2xl"></FaFacebook>
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <FaTwitter className="text-light-blue-600 text-2xl"></FaTwitter>
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <FaInstagram className="text-primary text-2xl"></FaInstagram>
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    );
  }