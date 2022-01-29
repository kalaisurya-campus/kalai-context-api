import React, { useState } from "react";
import "./styles/Signup.scss";
import { auth } from "../../firebasedata";
import { useHistory } from "react-router";
import Navbar from "../nabar/Navbar";
function Signup(props) {
  const [emails, SetEmails] = useState("");
  const [passwords, SetPasswords] = useState("");
  const [show, SetShowPasword] = useState(false);
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
    

      <form onSubmit={(e) => submits(e)} >
      
      <div className="main">
      <h1 className="pages">Signup page</h1>
        <div className="email">
          <div className="icons">
            <i class="material-icons">account_circle</i>
          </div>
          <div className="right_box">
            <input
              type="email"
              placeholder="Enter email"
              value={emails}
              name="email"
              onChange={(e) => SetEmails(e.target.value)}
            />
          </div>
        </div>
        <div className="password">
          <div className="icons">
            <p
              onClick={() => SetShowPasword(!show)}
              className="btn_page"
            >
              {show ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBjObZUh2HM4ZsdokpWI744O3Xj3g2Ovy2w&usqp=CAU"
                  className="m_btn"
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bzsNLr__FnpQyVsbmadZkQYocyexYapQtknbdTnIrfh58gU-c_oxYCd9sdIrFxVe_pk&usqp=CAU"
                  className="m_btn"
                />
              )}
            </p>
          </div>
          <div className="right_box">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={passwords}
              name="password"
              onChange={(e) => SetPasswords(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="submits">Submit</button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default Signup;
