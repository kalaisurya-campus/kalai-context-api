import React, { useState } from "react";
import "./styles/Signup.scss";
import { auth } from "../../firebasedata";
import { useHistory } from "react-router";
import Navbar from "../nabar/Navbar";
function Signup(props) {
  const [emails, SetEmails] = useState("");
  const [passwords, SetPasswords] = useState("");
  const history = useHistory();
  const submits = async (e) => {
    e.preventDefault();
    console.log(emails, passwords);
    try {
      const results = await auth.createUserWithEmailAndPassword(
        emails,
        passwords
      );
      window.M.toast({
        html: `welcome too ${results.user.emails}`,
        classes: "green",
      });
      history.push("/login");
    } catch (err) {
      window.M.toast({ html: err.message, classes: "red" });
    }
  };
  return (
    <div className="main_signup">
      <Navbar/>
      <h1>signup</h1>

      <form onSubmit={(e) => submits(e)}>
        <div className="main">
          <div className="email">
            <input
              type="email"
              placeholder="Enter email"
              value={emails}
              name="email"
              onChange={(e) => SetEmails(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Entre password"
              value={passwords}
              name="password"
              onChange={(e) => SetPasswords(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
