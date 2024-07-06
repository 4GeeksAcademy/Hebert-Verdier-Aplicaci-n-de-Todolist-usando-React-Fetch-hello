import React from "react";
import Contenedor from "./contenedor";

//create your first component

const Home = ({numero1, numero2, numero3, numero4, numero5, numero6}) => {
	return (
		<Contenedor numero1={numero1} numero2={numero2} numero3={numero3} numero4={numero4} numero5={numero5} numero6={numero6}/>
	);
};

export default Home;