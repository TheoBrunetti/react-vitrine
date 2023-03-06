import React from "react";
import { NavLink } from "react-router-dom";

const NotFoud = () => {
    return (
        <div className="notFound">
            <div className="notFound-content">
                <h2>Error 404</h2>
                <NavLink to="/">
                    <h3>
                        Retour à l'acceuil <i className="fas fa-home"></i>
                    </h3>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFoud;
