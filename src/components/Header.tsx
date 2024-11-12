"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header className="header">
            <h1 className="logo">KIRAN.</h1>
            <div id="menu-icon" onClick={toggleMenu} className="menu-icon">
                {isMenuOpen ? <RxCross2 /> : <FiMenu />}
            </div>
            <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
                <Link className="nav-link" href="/">Home</Link>
                <Link className="nav-link" href="/about">About</Link>
                <Link className="nav-link" href="/services">Services</Link>
                <Link className="nav-link" href="/projects">Projects</Link>
                <Link className="nav-link" href="/contact">Contact</Link>   
            </nav>
        </header>
    )
}

export default Header