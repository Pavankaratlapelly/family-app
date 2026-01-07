import "../App.css";
import { useNavigate } from "react-router-dom";
import pa1 from '../photos/pa1.jpg'
import RamAnna from '../photos/RamAnna.jpg'
import ShyamAnna from '../photos/ShyamAnna.jpg'
import headFamily from '../photos/headFamily.jpg'


function Brothers()
{
    const navigate = useNavigate();
    return (
        <>

        <br />
       
        <div className="brothers" >
          
          {/* Top centered card */}
          <div className="row justify-content-center mb-4">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <img src={headFamily} alt=" no image available" className="img-fluid"
                        style={{ maxHeight: "300px", width:"300px", objectFit:"cover" }}
                  />
                  <br />
                  <br />
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-success"  onClick={() => navigate("/hf-photos")}>
                      Mr. & Mrs. Vijaya Sampath Rao
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Existing two cards side by side */}
          <div className="row justify-content-center" >
            <div className="col-sm-3 mb-3 mb-sm-0" >
              <div className="card">
                <div className="card-body">
                  <img src={RamAnna} alt=" no image available" className="img-fluid"
                        style={{ maxHeight: "300px",width:"300px", objectFit:"cover" }}
                  />
                  <br />   
                  <br />     
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-success" onClick={() => navigate("/fs-photos")}>
                      Mr. & Mrs. Sandhya Ram
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <img src={ShyamAnna} alt=" no image available" className="img-fluid"
                        style={{ maxHeight: "300px",width:"300px", objectFit:"cover" }} />
                  <br />
                  <br />
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-success" onClick={() => navigate("/ss-photos")}>
                      Mr. & Mrs. Asha Shyam
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        </>
    )
}
export default Brothers;