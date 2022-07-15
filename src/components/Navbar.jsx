import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import img from "../image/armando.jpg";
import pdf from "../documents/Curriculum Vitae(english).pdf";
import lkdin from "../image/lkdin.png";
import correo from "../image/correo.png";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={img} alt="armando" />
        <h3>Armando B. Garcia</h3>
      </div>
      <a
        href="https://www.linkedin.com/i
n/armando-barriga-garcia-b53851229/"
        target="_blank"
        rel="noreferrer"
      >
        <img id={styles.img} src={lkdin} alt="Linkedin" />
      </a>
      <a id={styles.img} href="mailto:armando_b_garcia@hotmail.com">
        <img src={correo} alt="Email" />
      </a>
      <nav className={styles.links}>
        <a href={pdf} target="_blank" rel="noreferrer">
          CurriculumVitae
        </a>
        <Link to="/">Landing Page</Link>
      </nav>
    </div>
  );
};
