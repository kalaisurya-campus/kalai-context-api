import React from "react";
import "./styles/Darks.scss";
function Darks(props) {
    return (
        <div>
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
        </div>
    );
}

export default Darks;
