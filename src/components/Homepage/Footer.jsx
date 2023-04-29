import "./Footer.css";
import { ScrollToTop } from "./ScrollToTop";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-footer">By Diana Martins</p>
      <a
        className="link-card"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/diana-martins/"
      >
        <img
          alt="linked in link"
          src="https://www.freepnglogos.com/uploads/linkedin-logo-black-png-12.png"
        />
      </a>
      <a
        className="link-card"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/DianaMMartins"
      >
        <img
          alt="github link"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Github-circle_%28CoreUI_Icons_v1.0.0%29.svg.png"
        />
      </a>
      <ScrollToTop />
    </footer>
  );
};
