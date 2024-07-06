import React from "react";

const Tarjeta = ({numero1, numero2, numero3, numero4, numero5, numero6}) => {
	return (
		<div className="row fs-1 text-white d-flex justify-content-center">
			<div className="col-1 text-center bg-dark m-2 p-3"><i className="fa-regular fa-clock"></i></div>
			<div className="col-1 text-center bg-dark m-2 p-3">{numero6}</div>
			<div className="col-1 text-center bg-dark m-2 p-3">{numero5}</div>
			<div className="col-1 text-center bg-dark m-2 p-3">{numero4}</div>
			<div className="col-1 text-center bg-dark m-2 p-3">{numero3}</div>
			<div className="col-1 text-center bg-dark m-2 p-3">{numero2}</div>
			<div className="col-1 text-center bg-dark m-2 p-3">{numero1}</div>
		</div>
	);
};

export default Tarjeta;