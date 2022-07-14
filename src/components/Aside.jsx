import React from "react";
import styles from "./styles/Aside.module.css";
import blackjack from "../videos/blackjack.mp4";

export const Aside = () => {
  return (
    <div className={styles.container}>
      <aside>
        <h3 className={styles.title}>projects</h3>
        <ul className={styles.unorderList}>
          <li>HMTL & CSS: </li>
          <li>
            Javascript:
            <div className={styles.contain}>
              <a
                href="https://armandbgarcia.github.io/BlackJack/"
                target="_blank"
                rel="noreferrer"
              >
                WebPage - BlackJack
              </a>
              <a
                href="https://github.com/ArmandBGarcia/BlackJack"
                target="_blank"
                rel="noreferrer"
              >
                repository on Github
              </a>
              <video src={blackjack} controls></video>
            </div>{" "}
          </li>

          <li>React: </li>
          <li>React-Redux: </li>
          <li>Node: </li>
          <li>Express: </li>
          <li>SQL: </li>
        </ul>
      </aside>
    </div>
  );
};
