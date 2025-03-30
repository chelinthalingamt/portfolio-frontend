import React, { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
    const [bgColor, setBgColor] = useState("#1e3a8a");

    const changeMood = () => {
        const colors = ["#1e3a8a", "#6b21a8", "#047857", "#b91c1c", "#ca8a04"];
        setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    };

    return (
        <div className="container" style={{ backgroundColor: bgColor }}>
            <h1>Welcome to My Portfolio</h1>
            <p>Turning ideas into code & creativity into impact.</p>
            <div className="about">
                <h2>About Me</h2>
                <p>
                    Hi, I'm an aspiring developer with a passion for AI, coding, and creative projects. I enjoy working on
                    innovative solutions, exploring new technologies, and making ideas come to life.
                </p>
            </div>
            <button onClick={changeMood}>Change Mood</button>
        </div>
    );
};

export default Portfolio;
