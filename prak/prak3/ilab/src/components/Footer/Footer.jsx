import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <dif>
          <p></p>
        </dif>
        <div className="footer-left">
          <img src="/logo-ilab.png" alt="Logo" className="logo" />
          <p className="copyright">
            &copy; {new Date().getFullYear()} Your Website Name
          </p>
        </div>
        <div className="footer-right">
          <p className="content title">Services</p>
          <p className="content">Email Marketing</p>
          <p className="content">Campaigns</p>
          <p className="content">Branding</p>
          <p className="content">Offline</p>
        </div>
        <div className="footer-right">
          <p className="content title">About</p>
          <p className="content">Our Story</p>
          <p className="content">Benefits</p>
          <p className="content">Team</p>
          <p className="content">Careers</p>
        </div>
        <div className="footer-right">
          <p className="content title">Contact Us</p>
          <div className="content">
            <img
              src="/logo-facebook.png"
              alt="Facebook"
              className="ContactLogo"
            />
            <p>Facebook</p>
          </div>
          <div className="content">
            <img
              src="/logo-twitter.png"
              alt="Twitter"
              className="ContactLogo"
            />
            <p>Twitter</p>
          </div>
          <div className="content">
            <img
              src="/logo-instagram.png"
              alt="Instagram"
              className="ContactLogo"
            />
            <p>Instagram</p>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
