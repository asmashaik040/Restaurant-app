import { useNavigate } from "react-router-dom";
import { images } from "../constants";
import Counter from "./Counter";

const FindUs = () => {
  const navigate = useNavigate();
  const bookTable = () => navigate("/table");
  return (
    <>
      <div className="app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
          <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
            Find Us
          </h1>
          <div className="app__wrapper-content">
            <p className="p__opensans">
              New Town Road, Marker Street, New City 123456
            </p>
            <p
              className="p__cormorant"
              style={{ color: "#DCCA87", margin: "2rem 0" }}
            >
              Opening Hours
            </p>
            <p className="p__opensans">Mon - Fri: 10 AM - 10 PM</p>
            <p className="p__opensans">Sat - Sun: 12 PM - 10 PM</p>
          </div>
          <button
            type="button"
            className="custom__button"
            style={{ marginTop: "2rem" }}
            onClick={bookTable}
          >
            Visit Us
          </button>
        </div>

        <div className="app__wrapper_img">
          <img src={images.hummus1} alt="finus_img" />
        </div>
      </div>

      <div className="numbers">
        <Counter number={107} title="Vists" />
        <Counter number={5175} title="Visitors" />
        <Counter number={468} title="Visiting" />
      </div>
    </>
  );
};

export default FindUs;
