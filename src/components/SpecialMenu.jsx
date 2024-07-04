import { data } from "../constants";
import "./SpecialMenu.css";
import { useState } from "react";

const navigation = [
  { name: "Starter", href: "starter" },
  { name: "Salads", href: "salads" },
  { name: "Special", href: "special" },
  { name: "Drinks", href: "drinks"},
  { name: "Dessert", href: "dessert" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SpecialMenu = () => {
  // State to keep track of the currently selected div
  const [selectedDiv, setSelectedDiv] = useState("starter");

  const handleClick = (category) => {
    setSelectedDiv(category); // Assuming category is an object
  };

  return (
    <div id="menu" className="elementor-widget-container">
      <div className="css_prefix-menu-widget css_prefix-menu-list-tab">
        <div className="css_prefix-menu-list-tab-container">
          <div className="css_prefix-menu-tabs custom-nav-slider">
            <ul className="nav nav-pills">
              {navigation.map((item) => (
                <li
                  className="nav-item hover:text-black hover:bg-slate-100"
                  key={item.name}
                >
                  <a
                    className="nav-link"
                    data-toggle="pill"
                    onClick={() => handleClick(item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tab-content ml-16">
          <div className="tab-pane active" id={selectedDiv}>
            <div className="row">
              {data.menuItems[selectedDiv].map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="css_prefix-menulist-tab style-four">
                    <div className="menu-list-blocks">
                      <div className="css_prefix-menu-image">
                        <img
                          decoding="async"
                          src={item.imageSrc}
                          alt="image"
                        ></img>
                      </div>
                      <div className="css_prefix-menu-content">
                        <h5 className="css_prefix-menu-title">
                          {item.itemName}
                        </h5>
                        <p className="css_prefix-menu-desc">
                          {item.description}
                        </p>
                        <div className="css_prefix-menu-price">
                          <span className="css_prefix-price_label normal">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
