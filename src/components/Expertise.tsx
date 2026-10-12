import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const skillGroups = [
    {
        title: "Linguagens & ferramentas",
        description: "Ferramentas para análise, transformação e desenvolvimento de soluções de dados.",
        icon: faPython,
        labels: ["Python", "PySpark", "SQL", "R"],
    },
    {
        title: "Cloud & MLOps",
        description: "Plataformas e práticas para operacionalizar modelos e arquiteturas escaláveis.",
        icon: faCloud,
        labels: ["Google Cloud Platform (GCP)", "Vertex AI", "BigQuery", "Databricks", "MLflow", "Docker"],
    },
    {
        title: "Estatística & modelagem",
        description: "Métodos para medir impacto, compreender séries temporais e orientar decisões de negócio.",
        icon: faChartLine,
        labels: [
            "Inferência Causal",
            "CausalPy",
            "DoWhy",
            "tfp-causalimpact",
            "MMM",
            "Meridian",
            "Robyn",
            "SARIMAX",
            "Prophet",
            "Otimização Matemática",
            "Solvers",
        ],
    },
];

function Expertise() {
    return (
    <section className="container" id="expertise" aria-labelledby="expertise-heading">
        <div className="skills-container">
            <h1 id="expertise-heading">Competências</h1>
            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <article className="skill" key={group.title}>
                        <FontAwesomeIcon icon={group.icon} size="3x" aria-hidden="true" />
                        <h3>{group.title}</h3>
                        <p>{group.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Stack:</span>
                            {group.labels.map((label) => (
                                <Chip key={label} className="chip" label={label} />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
    );
}

export default Expertise;
