import React from "react";
import Tarjeta from "./tarjeta";

const Contenedor = ({numero1, numero2, numero3, numero4, numero5, numero6}) => {
	return (
		<div className="row bg-black">
            <Tarjeta numero1={numero1} numero2={numero2} numero3={numero3} numero4={numero4} numero5={numero5} numero6={numero6}/>
        </div>
	);
};

export default Contenedor;