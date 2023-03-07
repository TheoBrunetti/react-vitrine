import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Navigation from "../components/Navigation";

const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <Buttons left={"/"} right={"/projet-2"} />
            </div>
        </main>
    );
};

export default Project1;
