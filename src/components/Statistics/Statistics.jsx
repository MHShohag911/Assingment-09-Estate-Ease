import { Typography, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function StatsCard({ count, title, description }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography
        variant="gradient"
        className="text-4xl font-bold"
        color="blue-gray"
      >
        {count}
      </Typography>
      <hr className="mt-2 mb-4 max-w-sm" />
      <Typography variant="h5" className="mt-1 font-bold text-primary">
        {title}
      </Typography>
      <Typography className="text-base max-w-xs font-normal leading-7 !text-gray-500">
        {description}
      </Typography>
    </Card>
  );
}

export function Statistics() {
  // Local data object
  const initialData = {
    dreamPlaces: 10000,
    happiestCustomers: 1500,
    soldProperties: 1000,
    rentProperties: 200,
  };

  // State to hold dynamic counts
  const [statsCount, setStatsCount] = useState({
    dreamPlaces: 0,
    happiestCustomers: 0,
    soldProperties: 0,
    rentProperties: 0,
  });
  const stats = [
    {
      count: `${statsCount.happiestCustomers.toLocaleString()}+`,
      title: "Happiest Customers",
      description: "Be the next one.",
    },
    {
      count: `${statsCount.soldProperties.toLocaleString()}+`,
      title: "Sold Properties",
      description: "You are the next one.",
    },
    {
      count: `${statsCount.rentProperties.toLocaleString()}+`,
      title: "Rent Properties",
      description: "Stay in your comfort place.",
    },
  ];

  // Simulate dynamic updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStatsCount((prevStats) => ({
        dreamPlaces: Math.min(
          prevStats.dreamPlaces + 500,
          initialData.dreamPlaces
        ),
        happiestCustomers: Math.min(
          prevStats.happiestCustomers + 50,
          initialData.happiestCustomers
        ),
        soldProperties: Math.min(
          prevStats.soldProperties + 30,
          initialData.soldProperties
        ),
        rentProperties: Math.min(
          prevStats.rentProperties + 5,
          initialData.rentProperties
        ),
      }));
    }, 200);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <section className="py-10 mt-10 container mx-auto">
      <div className="lg:mb-24 mb-10 text-center">
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Find Your Dream Place
        </Typography>
        <Typography variant="lead" className="w-w-full !text-gray-500 ">
          We&apos;re constantly trying to express ourselves and actualize our
          supports. If you have the opportunity to play
        </Typography>
      </div>
      <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
        <Card className="bg-gray-100/50 py-5 text-center" shadow={false}>
          <div className="flex flex-col justify-center md:flex-row md:gap-20 items-center">
            <div>
              <Typography
                variant="h1"
                className="!text-primary !leading-snug text-5xl"
              >
                {statsCount.dreamPlaces.toLocaleString()}+
              </Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-2 font-bold"
              >
                Dream Places
              </Typography>
            </div>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mt-6 font-bold"
            >
              Are Waiting for You.
            </Typography>
          </div>
          <Typography
            variant="lead"
            className="mt-1 text-base mx-auto !text-gray-500 lg:w-8/12"
          >
            We eagerly waiting for our customers. Give us the opportunity to
            find your dream place.
          </Typography>
        </Card>
        <div>
          <div className="flex gap-5 p-5 flex-col md:flex-row justify-between">
            {stats.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
