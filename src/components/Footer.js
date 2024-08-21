import React from "react";
import { pageLinks,pageLogos } from "../data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {
          pageLinks.map((link)=>{
            return (
            <li>
              <a href={link.href} className="footer-link">
              {link.text}
              </a>
            </li>  
            );
            
          })
        }
      </ul>
      <ul className="footer-icons">
        {
          pageLogos.map((logo)=>{
            return (
              <li>
                <a
                  href={logo.href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                <i className={logo.iconClass}></i>
                </a>
              </li>
            );
          })
        }
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
