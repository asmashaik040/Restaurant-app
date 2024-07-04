import Carousel from "./Carousel";
import burger from "../assets/burger.png";
import salad from "../assets/salad.png";
import biryani from "../assets/biryani.png";

const Header = () => {
  let slides = [burger, salad, biryani];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-cover h-full w-full object-cover">
        <Carousel autoSlide={true}>
          {[...slides.map((s, index) => <img src={s} key={index} />)]}
        </Carousel>
      </div>
      <div className="flex flex-col justify-center items-center px-8">
        <p className="pb-4 pt-16">
          Welcome to Muskaan, where culinary traditions of the Middle East come
          to life in every dish. Step into our warm and inviting space, where
          the aromas of freshly baked bread, rich spices, and sizzling meats
          greet you at the door. You're here to experience our way of life, a
          unique space perfect for any occasion.
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() => document.getElementById("menu").scrollIntoView()}
        >
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
