import React, { useState } from "react";
import '../assets/styles/Project.scss';

const projects = [
    {
        name: "Causal Inference API",
        description: "API REST para inferência causal, organizada com Arquitetura Hexagonal e Factory Pattern, com integração ao MLflow.",
        context: "Disponibilização de métodos de inferência causal por meio de uma API REST.",
        approach: "Separação de responsabilidades com Arquitetura Hexagonal e Factory Pattern; integração ao MLflow.",
        technologies: ["Python", "Inferência Causal", "Arquitetura Hexagonal", "MLflow"],
    },
    {
        name: "Media Mix & Cross-Correlation",
        description: "Análise de séries temporais e defasagens entre investimentos em canais de mídia e indicadores de resultado.",
        context: "Avaliação de efeitos temporais e possíveis atrasos entre variáveis de mídia e resultados.",
        approach: "Aplicação de métodos de séries temporais e cross-correlation para investigar relações e defasagens.",
        technologies: ["Séries Temporais", "Cross-Correlation", "Marketing Mix Modeling"],
    },
    {
        name: "Conversion Funnel Modeling",
        description: "Modelos de classificação e regressão para analisar etapas de conversão, jornada de clientes e pontos de abandono.",
        context: "Modelagem de eventos ao longo de um funil de conversão e identificação de padrões de abandono.",
        approach: "Uso de modelos supervisionados de classificação e regressão para analisar etapas e resultados do funil.",
        technologies: ["Classificação", "Regressão", "Conversão", "Jornada do Cliente"],
    },
    {
        name: "Anomaly Detection",
        description: "Detecção de anomalias em dados de produção com métodos estatísticos e de machine learning para apoiar alertas automatizados.",
        context: "Monitoramento de séries e indicadores para identificar comportamentos fora do padrão.",
        approach: "Aplicação de Isolation Forest, Z-Score e IQR como métodos complementares de detecção.",
        technologies: ["Isolation Forest", "Z-Score", "IQR", "Monitoramento"],
    },
];

function Project() {
    const [flippedProject, setFlippedProject] = useState<string | null>(null);

    return (
    <section className="projects-container" id="projects" aria-labelledby="projects-heading">
        <h1 id="projects-heading">Projetos em destaque</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                    <div className={`project-card-inner${flippedProject === project.name ? " is-flipped" : ""}`}>
                        <div className="project-face project-front" aria-hidden={flippedProject === project.name}>
                            <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <ul className="project-technologies" aria-label={`Tecnologias de ${project.name}`}>
                                {project.technologies.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                            </ul>
                            <button
                                className="project-flip-button"
                                type="button"
                                aria-label={`Ver mais detalhes sobre ${project.name}`}
                                aria-expanded={flippedProject === project.name}
                                tabIndex={flippedProject === project.name ? -1 : 0}
                                onClick={() => setFlippedProject(project.name)}
                            >
                                Ver detalhes <span aria-hidden="true">↗</span>
                            </button>
                        </div>
                        <div className="project-face project-back" aria-hidden={flippedProject !== project.name}>
                            <span className="project-number">PROJETO {String(index + 1).padStart(2, "0")}</span>
                            <h2>{project.name}</h2>
                            <div className="project-detail">
                                <h3>Contexto</h3>
                                <p>{project.context}</p>
                            </div>
                            <div className="project-detail">
                                <h3>Abordagem</h3>
                                <p>{project.approach}</p>
                            </div>
                            <button
                                className="project-flip-button"
                                type="button"
                                aria-label={`Voltar ao resumo de ${project.name}`}
                                aria-expanded={flippedProject === project.name}
                                tabIndex={flippedProject === project.name ? 0 : -1}
                                onClick={() => setFlippedProject(null)}
                            >
                                <span aria-hidden="true">↶</span> Voltar ao resumo
                            </button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
    );
}

export default Project;
