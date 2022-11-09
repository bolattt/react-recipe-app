import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { color } = useContext(ThemeContext);
  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Panda</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
