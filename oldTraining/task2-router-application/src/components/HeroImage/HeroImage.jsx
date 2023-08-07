import React from "react";
import "./HeroImage.css";

const HeroImage = () => {
  // const imgID = math.Random();
  return (
    <React.Fragment>
      <div className="hero">
        <img
          src="https://source.unsplash.com/random/3840x2160?sig=${Math.random()}"
        />
      </div>
    </React.Fragment>
  );
};

export default HeroImage;
