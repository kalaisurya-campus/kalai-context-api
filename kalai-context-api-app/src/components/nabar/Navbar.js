import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
import { auth } from "../../firebasedata";
function Navbar(props) {
  const history = useHistory();
  return (
    <div className="navbars">
      <div className="navbar_list py-3">
        <div className="left_nabar px-3">
          <h4>KalaiRoman</h4>
        </div>
        <div className="right_navbar">
          <Link to="/login" className="links">
            Login
          </Link>
          <Link to="/signup" className="links">
            Signup
          </Link>
          <button
            className="logout"
            onClick={() => {
              auth.signOut();
              history.push("/signup");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
