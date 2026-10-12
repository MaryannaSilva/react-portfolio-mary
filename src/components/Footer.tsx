import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <nav className="footer-social-links" aria-label="Redes profissionais">
        <a href="https://github.com/MaryannaSilva" target="_blank" rel="noreferrer" aria-label="GitHub de Maryanna">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/maryanna-c-silva" target="_blank" rel="noreferrer" aria-label="LinkedIn de Maryanna">
          <LinkedInIcon />
        </a>
      </nav>
      <p>Maryanna Conceição Silva · Ciência de Dados, Inferência Causal &amp; MLOps</p>
    </footer>
  );
}

export default Footer;
