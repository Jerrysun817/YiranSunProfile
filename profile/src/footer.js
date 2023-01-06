import React from "react";
import "./footer.css";


function Footer() {
    return (
        <div className="footersec">
            <div className="linksec">
                <div className="link">
                    <a href="mailto:sunyiran@gmail.com"><div className="whitetext">Email</div></a>
                </div>
                <div className="link">
                    <a href="https://www.linkedin.com/in/yiran-sun-jerry/" target="_blank"><div className="whitetext">Linkedin</div></a>
                </div>
                <div className="link">
                    <a href="https://github.com/Jerrysun817" target="_blank"><div className="whitetext">Github</div></a>
                </div>
            </div>
            <div>
                ©Yiran Sun 2023
            </div>
        </div>
    )
}

export default Footer;