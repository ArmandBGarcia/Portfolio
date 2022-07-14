import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.containerLanding}>
      <h5 className={styles.textLanding}>Wellcome to my portfolio Web page</h5>
      <Link to="/home">
        <button className={styles.btnLanding}>Enter</button>
      </Link>
    </div>
  );
};

export default Landing;
