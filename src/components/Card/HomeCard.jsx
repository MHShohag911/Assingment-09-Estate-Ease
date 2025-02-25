import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { FaHome, FaLocationArrow } from "react-icons/fa";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export function HomeCard({ estate }) {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    card_image,
  } = estate;
  return (
    <Card data-aos={
      id%2===0 ? 'fade-up' : 'flip-right'
    } className="w-full max-w-[26rem] shadow-lg mx-auto">
      <CardHeader floated={false} color="blue-gray">
        <img src={card_image} alt={estate_title} />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent" />
        <div
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-0 right-0"
        >
          <Typography className="font-bold text-xs bg-black bg-opacity-50 px-4 py-2 m-2 rounded-md uppercase">
            {status}
          </Typography>
        </div>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-extrabold text-center text-primary w-full"
          >
            {estate_title}
          </Typography>
        </div>
        <Typography
          color="blue-gray"
          className="flex items-center gap-1.5 font-bold"
        >
          {segment_name}
        </Typography>
        <Typography color="gray">{description}</Typography>
        
        <div className="flex justify-center">
          <div className="group mt-8 w-1/2 flex items-center gap-8 justify-center bg-primary/5 rounded-full text-center">
            <Tooltip content={area}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-primary/5 p-3 text-gray-900 transition-colors hover:border-primary/10 hover:bg-primary/10 hover:!opacity-100 group-hover:opacity-70">
                <PiMapPinSimpleAreaBold className="text-primary" />
              </span>
            </Tooltip>
            <Tooltip content={location}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-primary/5 p-3 text-gray-900 transition-colors hover:border-primary/10 hover:bg-primary/10 hover:!opacity-100 group-hover:opacity-70">
                <FaLocationArrow className="text-primary" />
              </span>
            </Tooltip>
            <Tooltip
              content={facilities.map((facility, idx) => (
                <li key={idx} className="list-none">
                  {facility}
                </li>
              ))}
            >
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-primary/5 p-3 text-gray-900 transition-colors hover:border-primary/10 hover:bg-primary/10 hover:!opacity-100 group-hover:opacity-70">
                <FaHome className="text-primary" />
              </span>
            </Tooltip>
          </div>
        </div>
        <Typography className="mt-5">
          <span className="font-bold text-primary p-2">Price: {price}</span>
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Link to={`/estateDetails/${id}`}>
          <Button
            className="hover:bg-primary text-white bg-black font-extrabold"
            size="lg"
            fullWidth={true}
          >
            View Property
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
