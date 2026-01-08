import React from "react";
import { 
  FaUserTie, 
  FaFemale, 
  FaChild, 
  FaBaby, 
  FaWhatsapp, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";
import "./AboutFamily.css";

import RamAnna from '../photos/RamAnna.jpg';
import ShyamAnna from '../photos/ShyamAnna.jpg';
import headFamily from '../photos/headfamily.jpg';
import motherFamily from '../photos/motherFamily.jpg';

const AboutFamily = () => {
  return (
    <div className="family-container">
      <h1 className="main-heading">💖 The Kusumba's Family Story 💖</h1>
      <p className="intro">
        A family bound by love, respect, and togetherness. They live happily
        under one roof, cherishing traditions and harmony without conflicts.
      </p>

      {/* Mother of Family */}
      <section className="family-section row align-items-center">
        <div className="col-md-8">
          <h2>👩 Mother of Family</h2>
          <p>
            <FaFemale className="icon" /> <strong>Kusumba Kanukamma</strong> – The mother of the family is good and kind‑hearted, a guiding light whose wisdom and unconditional love inspire everyone.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src={motherFamily} 
            alt="Mother of Family" 
            className="img-fluid rounded" 
            style={{ width: "100%", height: "300px", objectFit: "cover" }} 
          />
        </div>
      </section>

      {/* Head of Family */}
      <section className="family-section row align-items-center">
        <div className="col-md-8">
          <h2>👨‍👩‍👦 Head of Family</h2>
          <p>
            <FaUserTie className="icon" /> <strong>Kusumba Sampath Rao</strong> – a successful businessman <br />
            <FaFemale className="icon" /> <strong>Kusumba Vijaya</strong> – a devoted homemaker
          </p>
          <div>
            <b>Contact details: </b>
            <a href="https://wa.me/919989596952" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon-whatsapp" />
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src={headFamily} 
            alt="Head of Family" 
            className="img-fluid rounded" 
            style={{ width: "100%", height: "300px", objectFit: "cover" }}  
          />
        </div>
      </section>

      {/* First Son */}
      <section className="family-section row align-items-center">
        <div className="col-md-8">
          <h2>👨‍👩‍👧‍👦 First Son’s Family</h2>
          <p>
            <FaUserTie className="icon" /> <strong>Kusumba Ramu</strong> – Assistant Line Man <br />
            <FaFemale className="icon" /> <strong>Kusumba Sandhya</strong> – Caring homemaker
          </p>
          <ul>
            <li><FaChild className="icon" /> Son: <strong>Kusumba Sai</strong></li>
            <li><FaChild className="icon" /> Daughter: <strong>Kusumba Vedha Sri</strong></li>
          </ul>
          <div>
            <b>Contact details: </b>
            <a href="https://wa.me/919000461435" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon-whatsapp" />
            </a>
            <a href="http://instagram.com/ramukusumba/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon-instagram" />
            </a>
            <a href="https://www.youtube.com/@Saivedha143" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon-youtube" />
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src={RamAnna} 
            alt="First Son Family" 
            className="img-fluid rounded" 
            style={{ width: "100%", height: "300px", objectFit: "cover" }} 
          />
        </div>
      </section>

      {/* Second Son */}
      <section className="family-section row align-items-center">
        <div className="col-md-8">
          <h2>👨‍👩‍👧 Second Son’s Family</h2>
          <p>
            <FaUserTie className="icon" /> <strong>Kusumba Shyam</strong> – Dedicated physiotherapist <br />
            <FaFemale className="icon" /> <strong>Kusumba Asha</strong> – Perfect partner
          </p>
          <p>
            <FaBaby className="icon" /> Newly born daughter – a blessing
          </p>
          <div>
            <b>Contact details: </b>
            <a href="https://wa.me/918099361435" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon-whatsapp" />
            </a>
            <a href="https://www.instagram.com/dr.shyamkusumba.pt/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon-instagram" />
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src={ShyamAnna} 
            alt="Second Son Family" 
            className="img-fluid rounded" 
            style={{ width: "100%", height: "300px", objectFit: "cover" }} 
          />
        </div>
      </section>

      <footer className="family-footer">
        <p>
          🌟 The Kusumba family stands as a shining example of love, unity, and happiness.
        </p>
      </footer>
    </div>
  );
};

export default AboutFamily;