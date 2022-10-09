import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/ixchel-t/"
          target="_blank"
          rel="noreferrer"
        >
          Ixchel
        </a>
        ,
      </div>
      is{" "}
      <a
        href="https://github.com/ix-t/09282022_react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://silly-truffle-1a62b8.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
