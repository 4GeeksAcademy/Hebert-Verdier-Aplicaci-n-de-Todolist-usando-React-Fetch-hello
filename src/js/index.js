//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
// import { func } from "prop-types";

let numberObj = {
    numero1: 8,
    numero2: 0,
    numero3: 0,
    numero4: 0,
    numero5: 0,
    numero6: 0,
}

setInterval(function () {
    //render your react application
    numberObj.numero1++;
    if (numberObj.numero1 > 9) {
        numberObj.numero1 = 0; numberObj.numero2++;
    }
    if (numberObj.numero2 > 9) {
        numberObj.numero2 = 0; numberObj.numero3++;
    }
    if (numberObj.numero3 > 9) {
        numberObj.numero3 = 0; numberObj.numero4++;
    }
    if (numberObj.numero4 > 9) {
        numberObj.numero4 = 0; numberObj.numero5++;
    }
    if (numberObj.numero5 > 9) {
        numberObj.numero5 = 0; numberObj.numero6++;
    }
    if (numberObj.numero6 > 9) {
        for (const key in numberObj) {
            key = 0;
        }
    }

    ReactDOM.createRoot(document.getElementById('app')).render(
        <Home numero1={numberObj.numero1} numero2={numberObj.numero2} numero3={numberObj.numero3} numero4={numberObj.numero4} numero5={numberObj.numero5} numero6={numberObj.numero6} />
    );

}, 1000);