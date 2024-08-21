import React from "react";
import logo from "../Images/logo.svg";
import { pageLinks } from "../data";
import { pageLogos } from "../data";
const Linkcomp = (link) => {
  console.log("adsdfa");
   return (
    <li>
      <a href={link.href} className="nav-link">
        {link.text}
      </a>
    </li>
  );
};
const Socialcomp = (socialIcon) => {
  console.log("adsdfa");
  return (
    <li>
      <a
        href={socialIcon.href}
        target="_blank"
        className="nav-icon"
        rel="noreferrer"
      >
        <i className={socialIcon.iconClass}></i>
      </a>
    </li>
  );
};
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
  
          {/* links   */} 
        <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <Linkcomp {...link} key={link.id}/>
              );
            })}
        </ul>

        <ul className="nav-icons">
          {
            pageLogos.map((socialIcon)=>{
              return (
                <Socialcomp {...socialIcon} key={socialIcon.id}/>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
