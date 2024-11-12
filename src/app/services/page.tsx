"use client";
import { useEffect } from "react";
import Button from "@/components/Button";
import { FaCode } from "react-icons/fa6";
import { BiSolidPaint } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";

function Services() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("scrollreveal").then((ScrollReveal) => {
            const sr = ScrollReveal.default({
                reset: true,
                distance: "80px",
                duration: 2000,
                delay: 200,
        });

        sr.reveal(".heading", { origin: "top" });

        sr.reveal(".services-container", { origin: "bottom" });
        });
    };
}, []);
    return(
        <section className="services" id="services">
            <h2 className="heading">Our <span>Services</span></h2>

            <div className="services-container">
                <div className="services-box">
                    <FaCode className="icon"/>
                    <h3>Web Devlopment</h3>
                    <p>Crafting dynamic and responsive websites that bring ideas to life with seamless user experiences and modern design.</p>
                    <Button text="Read More"/>
                </div>
                <div className="services-box">
                    <BiSolidPaint className="icon"/>
                    <h3>Graphic Designer</h3>
                    <p>Creative graphic designer with a keen eye for detail, crafting visually captivating designs that bring ideas to life.</p>
                    <Button text="Read More"/>
                </div>
                <div className="services-box">
                    <VscPreview className="icon"/>
                    <h3>UI/UX Designer</h3>
                    <p>Crafting intuitive and engaging user experiences that blend creativity with functionality for seamless digital interactions.</p>
                    <Button text="Read More"/>
                </div>
            </div>

        </section>
    )
}

export default Services