import React from "react";
import profilePhoto from '../assets/images/maryanna-profile.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <main className="container" id="about">
      <section className="about-section" aria-labelledby="profile-name">
        <div className="image-wrapper">
          <img className="profile-photo" src={profilePhoto} alt="Foto de perfil de Maryanna Conceição Silva" />
        </div>
        <div className="content">
          <div className="profile-social-links" aria-label="Redes profissionais">
            <a href="https://github.com/MaryannaSilva" target="_blank" rel="noreferrer" aria-label="GitHub de Maryanna">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/maryanna-c-silva" target="_blank" rel="noreferrer" aria-label="LinkedIn de Maryanna">
              <LinkedInIcon />
            </a>
          </div>
          <span className="profile-eyebrow">Cientista de Dados Pleno</span>
          <h1 id="profile-name">Maryanna Conceição Silva</h1>
          <p className="profile-headline">
            Data Scientist | Causal Inference, Machine Learning &amp; MLOps Systems |
            Driving Business Growth &amp; Scalable Architectures | Ex-Safra | UNESP Math
          </p>
          <p className="profile-location">São Paulo, SP — Brasil</p>
        </div>
      </section>

      <section className="profile-summary" aria-labelledby="about-heading">
        <h2 id="about-heading">Sobre mim</h2>
        <p>
          Cientista de Dados com sólida formação em Matemática pela UNESP e
          especialização em Data Science e Inteligência Artificial pela USP/Esalq.
          Trajetória marcada pelo rigor analítico desde a graduação — onde conciliei
          duas Iniciações Científicas (em Otimização Linear com Python/Gurobi e
          Sistemas Dinâmicos) e o Programa de Educação Tutorial (PET) —, combinada
          com a participação marcante no projeto de microssatélite UbatubaSat
          (2010–2017) em parceria com INPE e AEB. Atuo na construção de soluções
          analíticas escaláveis e modelos de inferência causal para empresas de
          grande porte dos setores de telecomunicações e financeiro.
        </p>
      </section>
    </main>
  );
}

export default Main;
