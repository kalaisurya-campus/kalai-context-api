import React from "react";
import Navbar from "../nabar/Navbar";
import "./styles/AnotherHome.scss";
function AnotherHome(props) {
  return (
    <>

     <div className="home-cars">
         <Navbar/>
     <div className="car-place">
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
     </div>
    </>
  );
}

export default AnotherHome;
