import Section from "../section/Section";
import "./footer.css";
import logo from "../../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import FooterBottom from "./footerBottom/FooterBottom";

const Footer = () => {
  return (
    <div>
      <Section className="footer">
        <div className="footer-section">
          <img src={logo} alt="logo" className="logo" />
          <p>
            We are keen to provide the best possible service to provide an
            outstanding user experience to our customers so that they can enjoy
            our diverse, high-quality product
          </p>
        </div>
        <div className="footer-section">
          <h3>Important Links</h3>
          <div className="footer-columns">
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Return Policy</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Terms And Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <div className="footer-columns">
            <ul>
              <li>
                <a href="">my account</a>
              </li>
              <li>
                <a href="">My orders</a>
              </li>
              <li>
                <a href="">shopping cart</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">favorite</a>
              </li>
              <li>
                <a href="">track your order</a>
              </li>
              <li>
                <a href="">news</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h3>contact us</h3>
          <ul className="contact-info">
            <li>talk to us : 0402240206</li>
            <li>contact us : 01030292804</li>
            <li>United Arab Emirates , Dubai</li>
            <li>
              <ul className="icons">
                <li>
                  <FaPhoneAlt />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTiktok />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Section>
      <FooterBottom />
    </div>
  );
};

export default Footer;
