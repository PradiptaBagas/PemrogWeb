import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div class="about-us">
        <h2>Welcome to "Lab Informatika UMM"</h2>
        <p>
          Laboratorium Teknik Informatika berfungsi sebagai pusat pembelajaran
          praktis dan eksperimental yang dipergunakan oleh mahasiswa dan
          pelayanan untuk riset dan konsultasi keteknikan mencakup desain
          sofware untuk animasi, administrasi, grafis dll.
        </p>

        <div class="card">
          <img
            src="/software-engineering-image.jpg"
            alt="Software Engineering Lab"
          />
          <div class="card-content">
            <h3>Laboratorium Rekayasa Perangkat Lunak</h3>
            <p>
              Melakukan analisa kelayakan pembuatan, penerapan proyek perangkat
              lunak, analisa kebutuhan, perancangan, pembuatan dan penjaminan
              kualitas perangkat lunak serta melakukan rekayasa ulang perangkat
              lunak.
            </p>
          </div>
        </div>

        <div class="card">
          <img
            src="/network-security-image.jpg"
            alt="Sistem dan Keamanan Jaringan Lab"
          />
          <div class="card-content">
            <h3>Laboratorium Sistem dan Keamanan Jaringan</h3>
            <p>
              Menganalisis permasalahan, memberikan solusi berupa perekayasaan,
              pembuatan dan pengelolaan, serta melakukan evaluasi pada sistem
              jaringan.
            </p>
          </div>
        </div>

        <div class="card">
          <img src="/game-development-image.jpg" alt="Game Cerdas Lab" />
          <div class="card-content">
            <h3>Laboratorium Game Cerdas</h3>
            <p>
              Bekerja dengan tim mengembangkan dan merancang video game.
              Mengkoordinasikan tugas kompleks menciptakan video game baru yang
              memiliki tugas seperti merancang karakter, level, teka-teki, art
              dan animasi. Software Engineer, Programmer, atau Computer
              Scientist yang terutama mengembangkan basis kode untuk video game
              atau perangkat lunak terkait, seperti alat-alat pengembangan game.
            </p>
          </div>
        </div>

        <div class="card">
          <img src="/data-science-image.jpg" alt="Laboratorium Sains Data" />
          <div class="card-content">
            <h3>Laboratorium Sains Data</h3>
            <p>
              Menganalisis dan mengolah data menjadi suatu informasi dan
              pengetahuan.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
