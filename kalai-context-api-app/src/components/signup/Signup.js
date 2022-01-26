import React, { useState } from "react";
import Navbar from "../nabar/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebasesfile";
import "./styles/Signup.scss";
function Signup(props) {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [show, SetShoePassword] = useState(false);
  const histroy = useHistory();
  const onsubmitfire = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      histroy.push("/login");
      // alert(`welcome too ${result.user.email}`);
      console.log(result);
      // window.notify.toast({ html: `welcome ${result.user.email}`, classes: "green" });
    } catch (err) {
      // window.M.toast({ html: err.Message, classes: "green" });
      console.log(err);
    }
  };
  const notify = () => toast("welcome too login page");
  return (
    <>
      <Navbar />
      <div className="sign-ups">
        <h1 className="text-center hs">Signup page</h1>
        <button onClick={() => histroy.goBack()} className="signs">
          Back
        </button>
        <div className="form-div">
          <form onSubmit={onsubmitfire}>
            <div>
              <input
                type="email"
                placeholder="Entre email"
                name="email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              ></input>
            </div>
            <div className="splits_mons">
              <div>
                <input
                  type={show ? "text" : "password"}
                  placeholder="Entre password"
                  name="password"
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                  
                ></input>
              </div>

              <div>
                <button
                  className="mon-button"
                  onClick={() => SetShoePassword(!show)}
                >
                  {show ? (
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9pooie-hkFnk-Ba0I6Yr8A4Zlwi3buf0Rw&usqp=CAU" />
                    </div>
                  ) : (
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8r-i5MLjF90A9ejHcRG6Mgrk8MYENVFxpng&usqp=CAU" />
                    </div>
                  )}
                </button>
              </div>
            </div>

            <div>
              <button className="logins_button mt-2" onClick={notify}>
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
