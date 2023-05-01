import { ScrollToTop } from "./ScrollToTop";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-footer">By Diana Martins</p>
      <section className="links">
        <a
          className="link-card"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/diana-martins/"
        >
          <img alt="linked in link" src={linkedin} />
        </a>
        <a
          className="link-card"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DianaMMartins"
        >
          <img alt="github link" src={github} />
        </a>
        <ScrollToTop />
      </section>
    </footer>
  );
};
