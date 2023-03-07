import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Navigation from "../components/Navigation";

const Project2 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1} />
                <Buttons left={"/projet-1"} right={"/projet-3"} />
            </div>
        </main>
    );
};

export default Project2;
