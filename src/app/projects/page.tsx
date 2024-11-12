"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import currencyconverter from "../../../public/currencyconverter.jpg";
import numberguessinggame from "../../../public/numberguessinggame.png";
import simplecalculator from "../../../public/simplecalculator.jpg";
import studentmanagement from "../../../public/studentmanagement.png";
import atmmachine from "../../../public/atmmachine.jpg";
import countdowntimer from "../../../public/countdowntimer.png";

function Projects(){
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: "80px",
            duration: 2000,
            delay: 200,
        });

        // Reveal the .heading class on scroll
        sr.reveal(".heading", { origin: "top" });
        
        sr.reveal(".portfolio-box", { origin: "bottom" });
    }, []);
    return(
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <Image src={currencyconverter} alt="currency converter" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Currency Converter</h4>
                        <p>A command-line tool for quick, real-time currency conversions with user-friendly input and accurate exchange rates.</p>
                        <Link href={"/"}><BiLinkExternal className="project-icon"/></Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={numberguessinggame} alt="number guessing game" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Number Guessing Game</h4>
                        <p>Fun CLI Number Guessing Game where players test their luck and logic to guess the correct number in minimal attempts</p>
                        <Link href={"/"}><BiLinkExternal className="project-icon"/></Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={simplecalculator} alt="simple calculator" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Simple Calculator</h4>
                        <p>A straightforward CLI calculator built to perform basic arithmetic operations with a user-friendly command-line interface.</p>
                        <Link href={"/"}><BiLinkExternal className="project-icon"/></Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={studentmanagement} alt="student management" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>Student management system</h4>
                        <p>Designed to efficiently manage student records, including adding, updating, and viewing details through an interactive command-line interface.</p>
                        <Link href={"/"}><BiLinkExternal className="project-icon"/></Link>
                    </div>
                </div>

                <div className="portfolio-box">
                    <Image src={atmmachine} alt="atm machine" className="project-img"/>
                    <div className="portfolio-layer">
                        <h4>ATM Machine</h4>
                        <p>Developed a CLI-based ATM machine simulation that handles account management, transactions, and balance inquiries with secure and efficient functionality.</p>
                        <Link href={"/"}><BiLinkExternal className="project-icon"/></Link>
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