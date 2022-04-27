import React from "react";
import zxcvbn from "zxcvbn";
function NameTetxt({ Name }) {
    const textpasswords = zxcvbn(Name);
    const nums = (textpasswords.score * 100) / 4;
    // console.log(nums);
    // console.log(Name);
    const createtextstrongs = () => {
        switch (textpasswords.score) {
            case 0:
                return "Enter Your Name";
            case 1:
                return "weak";
            case 2:
                return "Fear";
            case 3:
                return "Good";
            case 4:
                return "Strong";
            default:
                return "none";
        }
    };
    const textstrongpassword = () => {
        switch (textpasswords.score) {
            case 0:
                return "red";
            case 1:
                return "blue";
            case 2:
                return "orange";
            case 3:
                return "blue";
            case 4:
                return "green";
            default:
                return "none";
        }
    };
    const chnagepasswords = () => ({
        width: `${nums}%`,
        background: textstrongpassword(),
        height: "7px",
    });
    return (
        <>
            <div
                className="progress"
                style={{ height: "7px", marginTop: "-8px" }}
            >
                <div className="progress-bar" style={chnagepasswords()}></div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "20px",
                }}
            >
                {createtextstrongs()}
            </div>
        </>
    );
}

export default NameTetxt;
