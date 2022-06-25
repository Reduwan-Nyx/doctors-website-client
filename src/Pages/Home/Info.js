import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../icons/clock.svg";
import location from "../../icons/marker.svg";
import phone from "../../icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        bgClass="bg-accent"
        img={location}
      ></InfoCard>
      <InfoCard
        cardTitle="Contract Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
