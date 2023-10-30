import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <p class="map-title">
        <strong>Where to Find Us</strong>
      </p>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15807.000361491526!2d112.5992888!3d-7.9211517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881f5a1288a83%3A0x2a5ec5132ddb7113!2sLaboratorium%20Informatika%20UMM!5e0!3m2!1sid!2sid!4v1698210125490!5m2!1sid!2sid"
          width="100%"
          height="360"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Laboratorium Informatika UMM"
        ></iframe>
      </div>
      <div class="contact-container">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> Jl. Raya Tlogomas No.246, Jawa Timur
            65144, Indonesia
          </p>
          <p>
            <strong>Phone:</strong> (0341) 464318, ext 252
          </p>
          <p>
            <strong>Email:</strong> lab.informatika@umm.ac.id
          </p>
        </div>
        <div class="business-hours">
          <h2>Business Hours</h2>
          <p>
            <strong>Monday - Friday:</strong> 8am to 4pm
          </p>
          <p>
            <strong>Saturday:</strong> 8am to 12pm
          </p>
          <p>
            <strong>Sunday:</strong> Closed
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
