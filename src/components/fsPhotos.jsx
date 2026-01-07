import React from "react";

import './hfPhotos.css'



// Import images

import fs1 from "../photos/FirstSon/fs1.jpg";
import fs2 from "../photos/FirstSon/fs2.jpg";
import fs3 from "../photos/FirstSon/fs3.jpg";
import fs4 from "../photos/FirstSon/fs4.jpg";
import fs5 from "../photos/FirstSon/fs5.jpg";
import fs6 from "../photos/FirstSon/fs6.jpg";
import fs7 from "../photos/FirstSon/fs7.jpg";
import fs8 from "../photos/FirstSon/fs8.jpg";
import fs9 from "../photos/FirstSon/fs9.jpg";
import fs10 from "../photos/FirstSon/fs10.jpg";
import fs11 from "../photos/FirstSon/fs11.jpg";
import fs12 from "../photos/FirstSon/fs12.jpg";

const photos = [
  { img: fs1, name: "FS 1" },
  { img: fs2, name: "FS 2" },
  { img: fs3, name: "FS 3" },
  { img: fs4, name: "FS 4" },
  { img: fs5, name: "FS 5" },
  { img: fs6, name: "FS 6" },
  { img: fs7, name: "FS 7" },
  { img: fs8, name: "FS 8" },
  { img: fs9, name: "FS 9" },
  { img: fs10, name: "FS 10" },
  { img: fs11, name: "FS 11" },
  { img: fs12, name: "FS 12" }
];

const FsPhotos = () => {
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

export default FsPhotos;
