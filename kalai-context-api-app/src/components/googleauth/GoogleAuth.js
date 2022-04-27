import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import Landing from "./components/Landing";
import Samll from "./components/Samll";
import emailjs from "emailjs-com";
function GoogleAuth(props) {
    const usehistory = useHistory();
    const [emptyimages, SetEmptyImage] = useState([]);
    const [name, SetName] = useState([]);
    const [token, AcessToken] = useState([]);

    // const[stores,SetStores]=useState([]);
    // const cat = localStorage.getItem();
    // SetStores(cat);
    const form = useRef();
    const responseGoogle = (response) => {
        console.log(response);
        console.log("tokensr", response.accessToken);
        AcessToken(response.accessToken);
        console.log(response.Du.tf);
        SetName(response.Du.tf);
        console.log(response.profileObj.imageUrl);
        SetEmptyImage(response.profileObj.imageUrl);

        // const parseJwt = (token,response) => {
        //     try {
        //         return JSON.parse((response.split(".")[1]));
        //     } catch (e) {
        //         return null;
        //     }
        // };
        // return parseJwt;
    };
    console.log("123", emptyimages);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "serices",
                "My Default Template",
                form.current.value,
                "uoeS6Kk01IqV3ceeC"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="h-100vh">
            <img src={emptyimages} alt="no image" />
            <button onClick={() => usehistory.goBack("/")}>back</button>
            google
            <GoogleLogin
                clientId="1088280318673-bqvvomok82p2d8srattr74qocq2c9u6o.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
            <div>
                <h1>{name}</h1>
                <p>{token} </p>
            </div>
            <div>
                <Switch>
                    <Router>
                        <Route path="/land" component={Landing} />
                        <Route path="/small" component={Samll} />
                    </Router>
                </Switch>
            </div>
            <Link to="/land">clik</Link>
            <div className="containe">
                <div className="send-mails">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>contact No</label>
                        <input name="number" />
                        <label>user type</label>
                        <input name="number" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GoogleAuth;
