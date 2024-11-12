import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-text">
                <p>
                    Copyright &copy; 2024 by Kiran | All Rights Reserved.
                </p>
            </div>
            <div className="footer-iconTop">
                <Link href={"/"}><FaArrowUp className="footer-icon"/></Link>
            </div>
        </footer>
    )
}

export default Footer