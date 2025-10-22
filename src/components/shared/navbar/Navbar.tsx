import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";

const navLinks = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "offers", path: "/offers" },
  { key: "products", path: "/products" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="container">
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.key}>
                <NavLink to={link.path}>{t(`navLinks.${link.key}`)}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="anotherPages">
          <ul>
            <li>
              <NavLink to={"/"}>
                <FaHeart />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>
                <FaShoppingCart />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <IoPersonSharp />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
