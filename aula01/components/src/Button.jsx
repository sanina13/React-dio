import React from "react";

function Button(props){

	const { nome, onClick } = props

	return(
		<button onClick={onClick}>{nome}</button>
	)
}

export default Button