import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }) => {
    const [currentProject] = useState(projectsData[projectNumber]);
    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const [size, setSize] = useState();

    useEffect(() => {
        setLeft(Math.floor(Math.random() * 200 + 700) + "px");
        setTop(Math.floor(Math.random() * 200 + 150) + "px");
        setSize("scale(" + (Math.random() + 0.7) + ")");
    }, []);

    // apparition de l'image des projets
    const imgAnim = {
        initial: {
            opacity: 0,
            x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
            y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <div className="project-main">
            <div className="project-content">
                <h1>{currentProject.title}</h1>
                <p>{currentProject.date}</p>
                <ul className="languages">
                    {currentProject.languages.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <motion.div
                initial="initial"
                animate="visible"
                variants={imgAnim}
                transition={{ duration: 1.2 }}
                className="img-content"
            >
                <div className="img-container hover">
                    <span>
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.infos}</p>
                    </span>
                    <img
                        src={currentProject.img}
                        alt={currentProject.title}
                        className="img"
                    />
                </div>
                <div className="button-container">
                    <a
                        href="{currentProject.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover"
                    >
                        <span className="button">Voir le site</span>
                    </a>
                </div>
            </motion.div>
            <span className="random-circle" style={{ left, top, size }}></span>
        </div>
    );
};

export default Project;
