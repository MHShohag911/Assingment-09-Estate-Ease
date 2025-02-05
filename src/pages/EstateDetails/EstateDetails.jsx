import { useLoaderData, useParams } from "react-router-dom";
import { CarouselCustomArrows } from "../../components/CarouselCustomArrows/CarouselCustomArrows";
import { Helmet } from "react-helmet-async";
import DynamicMap from "../../components/DynamicMap/DynamicMap";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    delay: 200,
    duration: 1000,
});

const EstateDetails = () => {
  const estate = useLoaderData();
  const param = useParams();
  const id = param.id;

  return (
    <div className="lg:container mx-auto mt-5">
      <Helmet>
        <title>Estate Ease | Estate Details</title>
      </Helmet>
      <CarouselCustomArrows estate={estate}></CarouselCustomArrows>
      <div data-aos="zoom-in" className="mt-20 p-5">
        <h2 className="text-4xl font-bold text-center">
          {estate.estate_title}
        </h2>
        <h2 className="text-2xl text-primary font-bold">
          {estate.segment_name}
        </h2>
        <p className="text-justify text-xl text-blue-gray-900">
          This stunning {estate.estate_title}
          {estate.segment_name}is the
          epitome of luxury living, designed to cater to the refined tastes of
          modern families. Nestled in the prestigious {estate.location} this
          villa spans an expansive {estate.area}, offering spacious living areas
          that seamlessly blend comfort with sophistication. The villa boasts an
          open-plan layout with a living room featuring high ceilings and large
          glass windows that flood the space with natural light. A sleek and
          fully-equipped kitchen ensures a delightful culinary experience, while
          the villa's private swimming pool and lush gardens provide a tranquil
          outdoor retreat. Additional amenities include a garage for secure
          parking and modern conveniences to enhance everyday living. This home
          is perfect for hosting gatherings or enjoying peaceful family moments.
          With a price tag of {estate.price}, this villa represents a harmonious
          blend of modern design and luxurious lifestyle.
        </p>
        <div className="text-justify text-xl text-blue-gray-900 mt-5">
          {estate.status === "sale" ? (
            <p>
              Properties listed under the "Buy" status represent an opportunity
              for ownership, catering to individuals or families seeking a
              permanent residence or long-term investment. These homes are ideal
              for those looking to build equity, gain financial stability, and
              customize their living space according to their preferences.
              <li className="list-none before:content-['•'] before:text-primary before:text-3xl before:mr-3">
                Examples in the Data: Modern Family Villa: A luxurious home in
                Beverly Hills, perfect for those seeking a spacious and stylish
                family residence.
              </li>
              <li className="list-none before:content-['•'] before:text-primary before:text-3xl before:mr-3">
                Spacious Country House: Located in a serene rural setting, this
                home is a perfect retreat for those looking for peace and
                privacy.
              </li>
              <li className="list-none before:content-['•'] before:text-primary before:text-3xl before:mr-3">
                Eco-Friendly Home: A sustainable property designed for
                environmentally conscious buyers. These properties offer buyers
                a chance to make a lasting investment while enjoying the freedom
                and security of homeownership.
              </li>
            </p>
          ) : (
            <p>
              Buy Status Properties listed under the "Buy" status represent an
              opportunity for ownership, catering to individuals or families
              seeking a permanent residence or long-term investment. These homes
              are ideal for those looking to build equity, gain financial
              stability, and customize their living space according to their
              preferences. Examples in the Data: Modern Family Villa: A
              luxurious home in Beverly Hills, perfect for those seeking a
              spacious and stylish family residence. Spacious Country House:
              Located in a serene rural setting, this home is a perfect retreat
              for those looking for peace and privacy. Eco-Friendly Home: A
              sustainable property designed for environmentally conscious
              buyers. These properties offer buyers a chance to make a lasting
              investment while enjoying the freedom and security of
              homeownership. Rent Status Properties listed under the "Rent"
              status are ideal for individuals seeking flexibility and
              convenience without the long-term commitment of ownership. These
              options suit those who may frequently relocate for work, students,
              or anyone who values a hassle-free lifestyle with minimal
              responsibilities for property maintenance. Examples in the Data:
              Cozy Apartment: A compact and efficient city living space in
              Manhattan, designed for professionals or couples. Luxury
              Townhouse: A modern rental option in Brooklyn, offering stylish
              interiors and urban convenience. Renting provides tenants with
              access to premium locations and amenities, such as gyms, swimming
              pools, and more, without the burden of a mortgage or maintenance
              expenses.
            </p>
          )}
        </div>
      </div>
      <div data-aos="fade-up" className="mt-10 p-5">
        <DynamicMap id={id}></DynamicMap>
      </div>
    </div>
  );
};

export default EstateDetails;
