import React from "react";

import './hfPhotos.css'


// Import images
import ss1 from "../photos/SecondSon/ss1.jpg";
import ss2 from "../photos/SecondSon/ss2.jpg";
import ss3 from "../photos/SecondSon/ss3.jpg";
import ss4 from "../photos/SecondSon/ss4.jpg";
import ss5 from "../photos/SecondSon/ss5.jpg";
import ss6 from "../photos/SecondSon/ss6.jpg";
import ss7 from "../photos/SecondSon/ss7.jpg";
import ss8 from "../photos/SecondSon/ss8.jpg";
import ss9 from "../photos/SecondSon/ss9.jpg";
import ss10 from "../photos/SecondSon/ss10.jpg";
import ss11 from "../photos/SecondSon/ss11.jpg";
import ss12 from "../photos/SecondSon/ss12.jpg";
import ss13 from "../photos/SecondSon/ss13.jpg";

const photos = [
  { img: ss1, name: "SS 1" },
  { img: ss2, name: "SS 2" },
  { img: ss3, name: "SS 3" },
  { img: ss4, name: "SS 4" },
  { img: ss5, name: "SS 5" },
  { img: ss13, name: "SS 13" },
  { img: ss7, name: "SS 7" },
  { img: ss8, name: "SS 8" },
  { img: ss6, name: "SS 6" },
  { img: ss10, name: "SS 10" },
  { img: ss11, name: "SS 11" },
  { img: ss12, name: "SS 12" },
  { img: ss9, name: "SS 9" }
];

const SsPhotos = () => {

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

export default SsPhotos;
