"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import ecommerce from "../../../public/ecommerce.png";
import coffee from "../../../public/coffee.png";
import blog from "../../../public/blog.png";
import adventure from "../../../public/adventure.png";
import education from "../../../public/education.png";
import countdowntimer from "../../../public/countdowntimer.png";

function Projects(){
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

        sr.reveal(".portfolio-box", { origin: "bottom" });
        });
    };
}, []);
    return(
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <Image src={ecommerce} alt="ecommerce" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Modern E-commerce Website</h4>
                        <p>A modern eCommerce website offering a seamless shopping experience with real-time product listings, secure checkout, and responsive design for all devices.</p>
                        <Link href="https://hackathon-3-neon-eight.vercel.app" target="_blank" rel="noopener noreferrer">
                                <BiLinkExternal className="project-icon"/>
                            
                        </Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={coffee} alt="coffee website" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Modern Coffee Shop Website</h4>
                        <p>A cozy and inviting coffee website showcasing delicious brews, rich flavors, and an easy-to-navigate menu for coffee lovers.</p>
                        <Link href="https://coffee-website-fawn.vercel.app" target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal className="project-icon"/>
                        </Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={blog} alt="blog website" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Responsive Blog Website</h4>
                        <p>A clean and responsive blog website for sharing articles, ideas, and stories with an easy-to-read layout.</p>
                        <Link href="https://blog-website-three-snowy-45.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal className="project-icon"/>
                        </Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={adventure} alt="adventure website" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Responsive Adventure Travel Website</h4>
                        <p>A visually engaging website showcasing thrilling travel destinations with a responsive layout and easy navigation for adventure lovers.</p>
                        <Link href="https://adventure-website-sandy.vercel.app" target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal className="project-icon"/>
                        </Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={education} alt="education website" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Modern Education Platform UI</h4>
                        <p>A clean and user-friendly education website designed to display courses, resources, and learning features with a responsive layout.</p>
                        <Link href="https://eduation-website.vercel.app" target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal className="project-icon"/>
                        </Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={countdowntimer} alt="countdown timer" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>CountDown Timer</h4>
                        <p>A simple command-line tool to track time with precision, ideal for quick countdowns and productivity boosts.</p>
                        <Link href={"/"}><BiLinkExternal className="project-icon"/></Link>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Projects