import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <Link to="/">
        <h3>Hard Training Store</h3>
      </Link>
      <Link to="/category/smartphones">smartphones</Link>
      <Link to="/category/laptops">laptops</Link>
      <Link to="/category/fragrances">fragrances</Link>
      <CartWidget />
      
    </nav>
  );
}

export default NavBar;
