import spoon from "../assets/Spoon.png";

const AboutUs = () => {
  return (
    <div className="relative flex__center section__padding" id="about">
      <div className="w-full lg:flex-col flex__center">
        <div className="app__aboutus-content_about flex-1 flex justify-end items-end flex-col text-right">
          <h1 className="headtext__cormorant">About Us</h1>
          <p className="my-8 p__opensans">
            At Muskaan, we believe that food is a powerful storyteller, weaving
            tales of tradition, history, and community. Our journey began with a
            passion for sharing the authentic tastes of our heritage, carefully
            curated from the diverse culinary landscapes of the Middle East.
          </p>
          <p className="my-8 p__opensans">
            Every dish on our menu is a tribute to the region's culinary
            traditions, prepared with love and respect for time-honored recipes,
            each bite is a culinary adventure.
          </p>
        </div>

        <div className="mx-16 app__aboutus-content_knife flex__center">
          <img className="h-screen" src={spoon} alt="about_knife" />
        </div>

        <div className="flex-1 flex flex-start items-start flex-col text-left">
          <h1 className="headtext__cormorant">Our History</h1>
          <p className="my-8 p__opensans">
            Step into the rich tapestry of history woven into every dish at
            Muskaan. Established in 1949, our journey began with a deep-rooted
            passion for preserving and sharing the culinary traditions of the
            Middle East.
          </p>
          <p className="my-8 p__opensans">
            Over the years, Muskaan has evolved into a beloved gathering place
            for those who appreciate the art of good food and warm hospitality.
            Our commitment to quality and authenticity remains unwavering, as we
            continue to honor the timeless techniques and flavors that define
            Middle Eastern cooking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
