import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import img from "../image/armando.jpg";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={img} alt="armando" />
        <h3>Armando B. Garcia</h3>
      </div>
      <nav className={styles.links}>
        <Link to="/">Landing Page</Link>
        <Link to="/home">overview</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  );
};
