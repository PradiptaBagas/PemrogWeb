import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
return (
    <>
    <Navbar />
    <Hero />
    <div>
        <p>Halaman Home</p>
    </div>
    <Footer />
    </>
    );
};

export default Home;