import React from "react";
import styles from "./styles/Aside.module.css";
import blackjack from "../videos/blackjack.mp4";
import weatherApp from "../videos/WeatherApp.mp4";
import heroesApp from "../videos/HeroesApp.mp4";

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
            </div>
          </li>
          <li>
            React:
            <div className={styles.contain}>
              <a
                href="https://weather-kl1x8cllj-armandbgarcia.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                WebPage - WeatherApp
              </a>
              <a
                href="https://github.com/ArmandBGarcia/WeatherApp"
                target="_blank"
                rel="noreferrer"
              >
                repository on Github
              </a>
              <video src={weatherApp} controls></video>
              <br />
            </div>
            <hr />
            <div className={styles.contain}>
              <a
                href="https://heros-4p5n3c9dd-armandbgarcia.vercel.app/login"
                target="_blank"
                rel="noreferrer"
              >
                WebPage - HeroesApp
              </a>
              <a
                href="https://github.com/ArmandBGarcia/HerosApp"
                target="_blank"
                rel="noreferrer"
              >
                repository on Github
              </a>
              <video src={heroesApp} controls></video>
            </div>
          </li>
          <li>React-Redux: </li>
          <li>Node: </li>
          <li>Express: </li>
          <li>SQL: </li>
        </ul>
      </aside>
    </div>
  );
};
