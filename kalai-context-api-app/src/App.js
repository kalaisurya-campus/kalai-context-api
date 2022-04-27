import React, { useEffect, useState } from "react";
import "./App.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import AnotherHome from "./components/Anotherhome/AnotherHome";
import Navbar from "./components/nabar/Navbar";
import Darks from "./components/darkmode/Darks";
import GoogleAuth from "./components/googleauth/GoogleAuth";
import Bootstrap from "./components/Bootstrap/Bootstrap";
import Formvalidation from "./components/formvalidation/Formvalidation";
import TableContent from "./components/tablecontent/TableContent";
import Error from "./components/Error";
import MainNavs from "./components/mainnav/MainNavs";
function App() {
    const storeLocal = () => {
        return JSON.parse(localStorage.getItem("thems"));
    };
    const [buttons, SetButtons] = useState(storeLocal());
    useEffect(() => {
        localStorage.setItem("thems", JSON.stringify(buttons));
    }, [buttons]);

    return (
        <>
            <div className={`App ${buttons ? "darks" : "lights"}`}>
                <button onClick={() => SetButtons(!buttons)}>
                    {buttons ? (
                        <div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2saeUn8OLj-aLQF9IwWKxDnzoZakBFrDSpA&usqp=CAU"
                                width="100"
                                height="100"
                            />
                        </div>
                    ) : (
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPauzThAzqoDTYmvBslEiNVQvTjWnt5SMFNA&usqp=CAU"
                            width="100"
                            height="100"
                        />
                    )}
                </button>
                <MainNavs buttons={buttons} SetButtons={SetButtons} />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/home" component={AnotherHome} />
                        <Route path="/dark" component={Darks} />
                        <Route path="/googlelogin" component={GoogleAuth} />
                        <Route path="/bootstrap" component={Bootstrap} />
                        <Route path="/form/:name" component={Formvalidation} />
                        <Route path="/table" component={TableContent} />
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
