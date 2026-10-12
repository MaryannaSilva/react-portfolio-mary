import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faSatellite } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Timeline.scss'

const timelineEntries = [
  {
    date: "Março de 2025 – atual",
    dateTime: "2025-03",
    title: "Data Scientist Pleno",
    organization: "KORO Martech",
    description: "Estudo e desenvolvimento de modelos de inferência causal e modelos de recomendação.",
    icon: faBriefcase,
    current: true,
    type: "work",
  },
  {
    date: "Outubro de 2023 – agosto de 2025",
    dateTime: "2023-10",
    title: "MBA em Data Science and Analytics",
    organization: "USP/Esalq",
    description: "Pós-graduação lato sensu em Data Science and Analytics.",
    icon: faGraduationCap,
    type: "education",
  },
  {
    date: "Maio de 2023 – abril de 2025",
    dateTime: "2023-05",
    title: "Data Scientist Junior",
    organization: "KORO Martech",
    description: "Desenvolvimento de modelos preditivos para campanhas de marketing e otimização de estratégias utilizando dados de clientes.",
    icon: faBriefcase,
    type: "work",
  },
  {
    date: "Novembro de 2021 – março de 2023",
    dateTime: "2021-11",
    title: "Analista Financeiro Júnior",
    organization: "Banco Safra",
    description: "Desenvolvimento de insights para áreas como RH, Jurídico e Macro usando Python. Otimização e migração de projetos financeiros com JupyterHub, AWS e R.",
    icon: faBriefcase,
    type: "work",
  },
  {
    date: "Março de 2020 – janeiro de 2021",
    dateTime: "2020-03",
    title: "Iniciação Científica: Otimização Linear",
    organization: "UNESP - IBILCE",
    description: "Pesquisa aplicada em modelos de otimização linear e pesquisa operacional utilizando Python e Solver Gurobi para resolução de problemas computacionais complexos.",
    icon: faGraduationCap,
    type: "research",
  },
  {
    date: "Abril de 2019 – novembro de 2021",
    dateTime: "2019-04",
    title: "Integrante bolsista do PET – Matemática",
    organization: "UNESP - IBILCE / SESu",
    description: "Desenvolvimento de projetos integrados de ensino, pesquisa e extensão universitária, aplicando conceitos matemáticos na resolução de problemas e divulgando conhecimento científico para a comunidade.",
    icon: faGraduationCap,
    type: "research",
  },
  {
    date: "Maio de 2019 – fevereiro de 2020",
    dateTime: "2019-05",
    title: "Iniciação Científica: Paciência Búlgara e Sistemas Dinâmicos",
    organization: "UNESP - IBILCE",
    description: "Estudo e modelagem matemática sob a perspectiva de Sistemas Dinâmicos, órbitas, ciclicidade e partições de números inteiros.",
    icon: faGraduationCap,
    type: "research",
  },
  {
    date: "Fevereiro de 2018 – fevereiro de 2022",
    dateTime: "2018-02",
    title: "Licenciatura em Matemática",
    organization: "UNESP · Universidade Estadual Paulista",
    description: "Formação em Matemática com habilitação para docência.",
    icon: faGraduationCap,
    type: "education",
  },
  {
    date: "Agosto de 2016",
    dateTime: "2016-08",
    title: "Summer Course: Teaching English as a Second or Foreign Language",
    organization: "Pine Manor College",
    description: "Curso de verão em ensino de inglês como segunda língua ou língua estrangeira.",
    icon: faGraduationCap,
    type: "education",
  },
  {
    date: "Junho de 2010 – julho de 2017",
    dateTime: "2010-06",
    title: "Membro do projeto UbatubaSat",
    organization: "Projeto UbatubaSat · apoio do INPE e da AEB",
    description: "Participação no desenvolvimento de um microssatélite educacional em um projeto que envolveu estudantes e professores de Ubatuba.",
    icon: faSatellite,
    type: "work",
    id: "ubatubasat",
  },
];

function Timeline() {
  return (
    <section className="experience-section" id="history" aria-labelledby="history-heading">
      <div className="experience-container">
        <h1 id="history-heading">Experiência &amp; formação</h1>
        <ol className="experience-timeline">
          {timelineEntries.map((entry) => (
            <li className={`experience-timeline-entry ${entry.type}`} key={entry.title}>
              <span className={`experience-timeline-marker ${entry.type}${entry.current ? " current" : ""}`} aria-hidden="true">
                <FontAwesomeIcon icon={entry.icon} />
              </span>
              <article className={`experience-card${entry.id === "ubatubasat" ? " satellite-experience-card" : ""}`} id={entry.id}>
                <span className="experience-type">
                  {entry.type === "education"
                    ? "Formação acadêmica"
                    : entry.type === "research"
                      ? "Pesquisa & extensão"
                      : "Experiência profissional"}
                </span>
                <time className="experience-date" dateTime={entry.dateTime}>{entry.date}</time>
                {entry.current && <span className="experience-current-label">Atual</span>}
                <h2>{entry.title}</h2>
                <h3>{entry.organization}</h3>
                <p>{entry.description}</p>
                {entry.id === "ubatubasat" && (
                  <ul className="satellite-partners" aria-label="Apoio institucional">
                    <li>INPE</li>
                    <li>AEB</li>
                    <li>Microssatélite educacional</li>
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
