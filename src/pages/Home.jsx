import React from "react";
import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";
import { Tecnologies } from "../components/Tecnologies";
import "../styles.css";
import styles from "./styles/Home.module.css";

export const Home = () => {
  return (
    <>
      <header className={styles.mainHeader}>
        <Navbar />
      </header>
      <div className={styles.container}>
        <div className={styles.article}>
          <article>
            <h2>Hello everybody!!</h2>
            <br />
            <p>
              This is my very first page and I'll try to make it as good as
              possible. I apologize if I make writing mistakes or do not express
              myself very well, my English is intermediate.
            </p>
            <br />
            <p>Let me give you a little description about me.</p>
            <br />
            <p>
              My name is <b>Armando</b>, I am from Mexico, more specifically
              from the state of Jalisco and I currently live in the town of
              Tizapan el Alto, I'm 28 years old and I'm a web developer{" "}
              <b>junior</b>.
            </p>
            <br />
            <p>
              I only going to talk about my life in the world of technology
              because I think is the unique important topic here.
            </p>
            <br />
            <p>
              Well, I just started studying programming seven months ago in a
              bootCamp colled <b>soyHenry</b>, that is an online intensive
              course from Argentina and also studying diferets courses in the
              plataform of Udemy
            </p>
            <br />
            <p>
              My current knowledge it's based in the technologies that are
              required to develop web sites both frontend and backend and also
              database.
            </p>
            <br />
            <p>The technologies that I know how to use are:</p>
            <br />
            <Tecnologies />
            <br />
            <p>
              Basically all the technologies of a <b>FullStack Developer</b>.
            </p>
            <br />
            <p>
              I'm also studying a bachelor's degree on Business management in
              the <b>Instituto Tecnologico Superior P'urhepecha</b> and actually
              I just passed to the <b>8th semester</b>, I have one year left to
              graduate.
            </p>

            <br />
            <p>
              My experience about web development it's based on several projects
              that I have made since I begun to study programming, feel free to
              watch and try them in the side bar section.
            </p>
            <br />
            <h2>What am I looking for?</h2>
            <br />
            <p>
              I am looking for an opportunity to work as a web developer, I am
              looking for a company that gives me that opportunity, that
              develops my skills and helps me grow and contribute to the world
              of technology. I have too much to give.
            </p>
            <br />
            <p className={styles.lastP}>
              PD. All my projects have been deployed on github pages and this
              portfolio web page was made with HTML, CSS, JS and React.
            </p>
          </article>
        </div>
        <div className={styles.aside}>
          <Aside />
        </div>
        <footer>
          <p>Armando B. Garcia &copy;</p>
        </footer>
      </div>
    </>
  );
};
