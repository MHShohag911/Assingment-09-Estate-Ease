import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CarouselCustomArrows } from "../../components/CarouselCustomArrows/CarouselCustomArrows";

const EstateDetails = () => {
  const estate = useLoaderData();

  return (
    <div className="lg:container mx-auto mt-5">
      <CarouselCustomArrows estate={estate}></CarouselCustomArrows>
    </div>
  );
};

export default EstateDetails;
