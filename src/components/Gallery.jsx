import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { images } from "../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/menu");
  };

  return (
    <div id="gallery" className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button" type="button" onClick={routeChange}>
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.shawarma,
            images.falafel,
            images.kebab,
            images. hummus,
            images.soup,
            images.burger,
            images.tabbouleh,
            images.fattoush,
            images.dolma,
            images.maqluba,
            images.Sumaghiyyeh,
            images.musakhan,
            images.coffee,
            images.tea,
            images.kunafah,
            images.baklava,
            images.findus,
            images.curry,
            images.hummus1,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
