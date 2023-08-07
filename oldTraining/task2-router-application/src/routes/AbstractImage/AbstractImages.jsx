import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AbstractImages.css";

const AbstractImages = () => {
  const [userData, setData] = useState([]);

  const randQuery = ["abstract", "fluid", "poly", "flowing", "lowpoly"];
  const rand = Math.floor(Math.random() * 10);
  const randQueryHandler = Math.floor(Math.random() * 5);

  const URL = `https://api.unsplash.com/search/photos?page=1&query=${randQuery[randQueryHandler]}&client_id=WvP-nQUy2lY5uXkVn3cYcHqklMCbEV2eEis3BsDt0ew`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.results[rand].links);
    });
  }, []);

  const imageURL = userData.download;

  return (
    <>
      <div className="hero">
        <img src={imageURL} />
      </div>
    </>
  );
};

export default AbstractImages;
