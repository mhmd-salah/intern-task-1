import "./header.css";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="search">
          <button className="catBtn">Categories</button>
          <input type="text" placeholder="Search for a product..." />
          <button className="searchIcon">
            <CiSearch className="icon"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
