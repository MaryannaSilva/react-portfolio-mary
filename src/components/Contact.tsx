import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1 id="contact-heading">Contato</h1>
          <p>Tem um desafio de dados ou uma oportunidade para conversarmos? Será um prazer entrar em contato.</p>
          <Button
            className="contact-button"
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/maryanna-c-silva"
            target="_blank"
            rel="noreferrer"
          >
            Falar comigo no LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
