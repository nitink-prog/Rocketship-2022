import { Link } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Rocketship</h1>
        </Link>
        <Searchbar />
        <Link to="/portfolio" className="navigation">
          Portfolio
        </Link>
        <Link to="/cash" className="navigation">
          Cash
        </Link>
        <Link to="/account" className="navigation">
          Account
        </Link>
      </nav>
    </div>
  );
}
