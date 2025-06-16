"use client";
import { useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { LiaLinkedinIn } from "react-icons/lia";
import Button from "./Button";
import Image from "next/image";
import myimage from "../../public/myimage.jpg";


function Hero(){
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("scrollreveal").then((ScrollReveal) => {
        const sr = ScrollReveal.default({
            //reset: true,
            distance: "80px",
            duration: 2000,
            delay: 200,
        });
        
        sr.reveal(".home-content", { origin: "top" });

        sr.reveal(".img", { origin: "bottom" });

        sr.reveal(".home-content h1", { origin: "left" });

        sr.reveal(".home-content p", { origin: "right" });

    const typed = new Typed(".multiple-text", {
        strings: ["Frontend Developer", "UI/UX Designer", "Professional Coder"],
        typeSpeed: 50, 
        backSpeed: 50, 
        backDelay: 1000, 
        loop: true, 
    });

    return () => {
        typed.destroy();
    };
});
};
    }, []);

    
    return(
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello It&#39;s Me</h3>
                <h1>Kiran Shoaib</h1>
                <h3>And I&#39;m a <span className="multiple-text"></span></h3>
                <p>Passionate about crafting seamless, interactive user experiences, I specialize in transforming ideas into responsive, dynamic web applications. With expertise in HTML, CSS, TailwandCSS, JavaScript, TypeScript, React, and Nextjs, I bring creativity and precision to each project. My goal is to deliver accessible, high-performance solutions that engage users and elevate brands. Let&#39;s build something amazing together!</p>
                <div>
                    <Link href="https://www.facebook.com/profile.php?id=100082489991459" target="_blank"><RiFacebookFill className="social-media"/></Link>
                    <Link href="https://github.com/KiranShoaib" target="_blank"><FaGithub className="social-media"/></Link>
                    <Link href="https://www.instagram.com/kiranshoaib091/" target="_blank" ><AiFillInstagram className="social-media"/></Link>
                    <Link href="https://www.linkedin.com/in/kiran-shoaib-9582392a3" target="_blank" ><LiaLinkedinIn className="social-media"/></Link>
                </div>
                <a href="/Kiran Shoaib.pdf" download>
                    <Button text="Download CV" />
                </a>
            </div>
            <div className="home-img">
                <Image src={myimage} alt="profile picture" className="img"/>
            </div>
        </section>

    )
}

export default Hero