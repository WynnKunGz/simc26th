import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <nav className="w-full">
      <div className="container">
        <h1>SIMC 26th</h1>
        <button>
          <Icon icon="mdi:menu"/>
        </button>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
