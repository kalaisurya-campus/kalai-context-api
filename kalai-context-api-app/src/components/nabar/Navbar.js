import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
import { auth } from "../../firebasedata";
import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
function Navbar() {
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
                    <Link to="/googlelogin" className="links">
                        GoogleAuth
                    </Link>
                    <Link to="/bootstrap" className="links">
                        Boot
                    </Link>
                    <Link to="/form" className="links">
                        Form validation
                    </Link>
                    <Link to="/table" className="links">
                        table
                    </Link>
                    {/* <div>
                        <input type="checkbox" id="mode" />
                        <div class="app">
                            <div class="container">
                                <label class="toggle" for="mode">
                                    <span class="label light">
                                        <img src="https://img.icons8.com/android/48/000000/sun.png" />
                                    </span>
                                    <span class="label dark">
                                        <img src="https://img.icons8.com/small/32/000000/bright-moon.png" />
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div> */}
                </div>
             
            </div>
        </div>
    );
}

export default Navbar;
