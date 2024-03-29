import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Navigation from "../components/Navigation";

const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2} />
                <Buttons left={"/projet-2"} right={"/projet-4"} />
            </div>
        </main>
    );
};

export default Project3;
