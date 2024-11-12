"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Image from "next/image";
import about from "../../../public/about.png";
import Button from "@/components/Button";

function About(){
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: "80px",
            duration: 2000,
            delay: 200,
        });

        
        sr.reveal(".heading", { origin: "top" });

        sr.reveal(".abimg", { origin: "left" });

        sr.reveal(".about-content", { origin: "right" });

    }, []);
    return(
        <section className="about" id="about">
            <div className="about-img">
                <Image src={about} alt="profile picture" className="abimg"/>
            </div>
            <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>Frontend Developer!</h3>
            <p> I&#39;m a dedicated Frontend Developer with a passion for creating seamless, responsive web interfaces that enhance user experience.</p>
            <p>With expertise in HTML, CSS, JavaScript, and modern frameworks, I transform design ideas into functional and engaging digital products.</p>
            <p>I constantly explore the latest technologies to craft efficient, dynamic solutions that meet user needs and business goals.</p>
            <Button text="Read More"/>
            </div>

        </section>
    )
}

export default About