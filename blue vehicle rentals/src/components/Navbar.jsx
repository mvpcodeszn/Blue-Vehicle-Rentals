import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Blue Vehicle Rentals</h2>

      <Link to="/">Dashboard</Link>

      <Link to="/vehicles">Vehicles</Link>

      <Link to="/customers">Customers</Link>

      <Link to="/rentals">Rentals</Link>
    </nav>
  );
}

export default Navbar;