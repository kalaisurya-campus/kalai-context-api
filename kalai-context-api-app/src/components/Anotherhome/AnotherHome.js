import React, { useEffect } from "react";
import Navbar from "../nabar/Navbar";
import "./styles/AnotherHome.scss";
function AnotherHome(props) {
  useEffect(() => {
    const sun = document.querySelector(".sun");
    const body = document.querySelector(".body");
const cars1=document.querySelector(".car1");
const cars2=document.querySelector(".car2");
    sun.onclick = function () {
      alert( "welcome too home page");
    
    };
    cars1.onclick=function()
    {
      alert("welcome too car 1 page");
    }
    cars2.onclick=function()
    {
      alert("welcome to car 2 page");
    }
  }, []);
  return (
    <div className="home_page">
      <div>
        <Navbar />
      </div>
      <section class="scene">
        <div class="sun"></div>
        <div class="bg">
          <img
            src="https://i.postimg.cc/Qxtn5scq/police-car-1.png"
            class="car1"
          />
          <img
            src="https://i.postimg.cc/Qxtn5scq/police-car-1.png"
            class="car2"
          />
        </div>
      </section>
    </div>
  );
}

export default AnotherHome;
