import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate();

    const goForward = () => {
		navigate(1);
	}

    return (
        <div>
            <h1>Esta es la pagina de inicio</h1>
            <button onClick={goForward}>Go forward</button>
        </div>
    );
}

export default Homepage;
