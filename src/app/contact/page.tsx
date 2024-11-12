"use client";
import { useEffect } from "react";

function Contact(){
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

        sr.reveal(".contact form", { origin: "bottom" });
        });
    };
}, []);
    return(
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form action='#'>
                <div className="input-box">
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email Address"/>   
                </div>
                <div className="input-box">
                    <input type="tel" placeholder="Mobile Number"/>
                    <input type="text" placeholder="Email Subject"/>   
                </div>
                <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" className="btn"/>
            </form>

        </section>
    )
}

export default Contact