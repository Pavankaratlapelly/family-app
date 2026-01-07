import React from "react";

import './hfPhotos'


// Import images
import hf1 from "../photos/headFamily/hf1.jpg";
import hf2 from "../photos/headFamily/hf2.jpg";
import hf3 from "../photos/headFamily/hf3.jpg";
import hf4 from "../photos/headFamily/hf4.jpg";
import hf5 from "../photos/headFamily/hf5.jpg";
import hf6 from "../photos/headFamily/hf6.jpg";
import hf7 from "../photos/headFamily/hf7.jpg";
import hf8 from "../photos/headFamily/hf8.jpg";
import hf9 from "../photos/headFamily/hf9.jpg";


const photos = [
  { img: hf1, name: "HF 1" },
  { img: hf2, name: "HF 2" },
  { img: hf3, name: "HF 3" },
  { img: hf4, name: "HF 4" },
  { img: hf5, name: "HF 5" },
  { img: hf6, name: "HF 6" },
  { img: hf7, name: "HF 7" },
  { img: hf8, name: "HF 8" },
  { img: hf9, name: "HF 9" }
];

const HfPhotos = () => {
  return (
    <div className="hf-container">
      {photos.map((photo, index) => (
        <div className="hf-card" key={index}>
          <img src={photo.img} alt={photo.name} />
          {/* <p>{photo.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default HfPhotos;
