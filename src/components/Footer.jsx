import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <div
    className="border-b-2 border-solid border-amber-400 app__footer section__padding"
    id="login"
  >
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">New Town Road, Marker Street, New City 123456</p>
        <p className="p__opensans">+1 (123) 456-78-90</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__footer-headtext uppercase">Muskaan</h1>
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <div className="flex items-center justify-center app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10 AM - 10 PM</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">12 PM - 10 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Muskaan. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
