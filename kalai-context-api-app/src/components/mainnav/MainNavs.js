import React from "react";
import "./styles/MainNavs.scss";
function MainNavs({ buttons, SetButtons }) {
    // console.log("kalai", buttons);
    return (
        <div className="kalai-box">
            <div className="btnsed">
                <button onClick={()=>SetButtons(!buttons)} className="mt-3">click</button>
            </div>
        </div>
    );
}

export default MainNavs;
