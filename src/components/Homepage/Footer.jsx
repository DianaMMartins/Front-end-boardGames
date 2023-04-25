// import { useState, useEffect } from "react";

import { ScrollToTop } from "./ScrollToTop";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-footer">by Diana Martins</p>
      <ScrollToTop />
      <section className="social-media">
        <section className="link-card">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/diana-martins/"
          >
            <img
              alt="linked in link"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            />
          </a>
        </section>
        <section className="link-card">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/DianaMMartins"
          >
            <img
              alt="github link"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png"
            />
          </a>
        </section>
      </section>
    </footer>
  );
};
