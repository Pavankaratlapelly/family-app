import React from 'react';
import { useNavigate } from 'react-router-dom';
import main from '../photos/main.jpg';

function MainCard() {
  const navigate = useNavigate();
  return (
    <center>
      <div className="card" style={{ width: "40rem" }} id="MainCard"> {/* ✅ wider card */}
        <div className="card-body">
          <img
            src={main}
            alt="Kusumba Samopath Rao"
            className="img-fluid"
            style={{
              width: "100%",       // ✅ full width
              height: "auto",      // ✅ keep aspect ratio
              objectFit: "contain" // ✅ show full horizontal image
            }}
          />
          <br /><br />
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => navigate('/brothers')}
          >
            Click to View Family Details
          </button>
        </div>
      </div>
    </center>
  );
}

export default MainCard;