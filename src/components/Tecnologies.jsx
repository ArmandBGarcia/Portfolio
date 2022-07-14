import React from "react";
import img1 from "../image/html5_logo.png";
import img2 from "../image/CSS3.png";
import img3 from "../image/javascript.png";
import img4 from "../image/react.png";
import img5 from "../image/redux.png";
import img6 from "../image/nodejs.png";
import img7 from "../image/express.png";
import img8 from "../image/sql.png";
import img9 from "../image/Postgre.png";
import styles from "./styles/Tecnologies.module.css";

export const Tecnologies = () => {
  return (
    <div className={styles.images}>
      <img src={img1} alt="html" />
      <img src={img2} alt="css" />
      <img src={img3} alt="javascript" />
      <img src={img4} alt="react" />
      <img src={img5} alt="react-redux" />
      <img src={img6} alt="node" />
      <img src={img7} alt="express" />
      <img src={img8} alt="SQL" />
      <img src={img9} alt="postgres" />
    </div>
  );
};
