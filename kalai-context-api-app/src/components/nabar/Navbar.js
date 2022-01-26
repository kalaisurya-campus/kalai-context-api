import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles/Navbar.scss";

import { auth } from "../../firebasesfile";
import { useHistory } from "react-router-dom";
function Navbar(props) {
  const history = useHistory();
  return (
    <div className="main-nav">
      <nav>
        <div class="nav-wrapper px-5">
          <Link to="/" className="link">
            <img src="https://picsum.photos/id/237/200/300" />
          </Link>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link">
                Signup
              </Link>
            </li>
            <li>
              <button
                className="link-button"
                onClick={() => {
                  auth.signOut();
                  history.push("/signup");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
