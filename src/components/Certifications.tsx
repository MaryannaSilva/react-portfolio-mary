import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Certifications.scss';

type CertificationCategory = "Google Cloud & AI" | "Data & SQL" | "Base & Outros";

interface Certification {
  name: string;
  issuer: string;
  category: CertificationCategory;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    name: "Orchestrate Workflows with the Data Agent Kit",
    issuer: "Google Skills",
    category: "Google Cloud & AI",
    credentialUrl: "https://www.skills.google/public_profiles/764b9acd-7d0b-4ec7-9546-c8e046052e68/badges/28556953?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Vertex AI",
    issuer: "Google Skills",
    category: "Google Cloud & AI",
    credentialUrl: "https://www.skills.google/public_profiles/764b9acd-7d0b-4ec7-9546-c8e046052e68/badges/8737617?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Data Analytics & Machine Learning using BigQuery",
    issuer: "Google Skills",
    category: "Google Cloud & AI",
    credentialUrl: "https://www.skills.google/public_profiles/764b9acd-7d0b-4ec7-9546-c8e046052e68/badges/8300292?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Data2Insights Immersion Track",
    issuer: "Explore Google Cloud",
    category: "Google Cloud & AI",
    credentialUrl: "https://www.credly.com/badges/e570386c-7908-40f7-b061-85fc357bf9d8/linked_in_profile",
  },
  {
    name: "Ingest2AI Challenge",
    issuer: "Google Labs for Sales",
    category: "Google Cloud & AI",
    credentialUrl: "https://explore.qwiklabs.com/public_profiles/0108fd8c-03b8-4969-ae45-6b872afac51a/badges/6176?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "SQL for Data Science",
    issuer: "UC Davis · Coursera",
    category: "Data & SQL",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/W4TQGTDYWQH7",
  },
  {
    name: "Cloud Hero BQML I",
    issuer: "Google Skills",
    category: "Google Cloud & AI",
    credentialUrl: "https://www.skills.google/public_profiles/764b9acd-7d0b-4ec7-9546-c8e046052e68/badges/10987681?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Cloud Hero BigQuery Skills",
    issuer: "Google Skills",
    category: "Google Cloud & AI",
    credentialUrl: "https://www.skills.google/public_profiles/764b9acd-7d0b-4ec7-9546-c8e046052e68/badges/5760024?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Python Basic",
    issuer: "University of Michigan · Coursera",
    category: "Base & Outros",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/H73NQ7JQSDXC",
  },
  {
    name: "Curso de Python 3 · Mundo 3 (40 horas)",
    issuer: "Curso em Vídeo",
    category: "Base & Outros",
    credentialUrl: "https://drive.google.com/file/d/16iTWXwdrbu-GqJ7ULl5rwmyVlVIrKcJf/view",
  },
  {
    name: "Git e GitHub (20 horas)",
    issuer: "Curso em Vídeo",
    category: "Base & Outros",
    credentialUrl: "https://drive.google.com/file/d/1s_sXXI4l7fb5ceeOWjjaMbY7qSkTz5Xn/view",
  },
  {
    name: "Microsoft Excel (40 horas)",
    issuer: "Curso em Vídeo",
    category: "Base & Outros",
    credentialUrl: "https://drive.google.com/file/d/188ggFDm9wau0u4vUOMGpFTf9N4kWsBdq/view",
  },
  {
    name: "Programa de Educação Tutorial (PET)",
    issuer: "UNESP · IBILCE",
    category: "Base & Outros",
    credentialUrl: "https://drive.google.com/file/d/1___hFLg5zTwHJ7E2ktj1Bp3I80dQYnRc/view",
  },
  {
    name: "Congresso de Iniciação Científica da UNESP · Certificado 1",
    issuer: "UNESP · IBILCE · Even3",
    category: "Base & Outros",
    credentialUrl: "https://www.even3.com.br/documentos/imprimir?i=5047905.5329868.7.3.276129953104065&cc=C98B1507-8AF6-4C4E-BBB0-81481A4021B3",
  },
  {
    name: "Congresso de Iniciação Científica da UNESP · Certificado 2",
    issuer: "UNESP · IBILCE · Even3",
    category: "Base & Outros",
    credentialUrl: "https://www.even3.com.br/documentos/imprimir?i=5513321.5329868.012059.3.51332153298680120593&cc=C98B1507-8AF6-4C4E-BBB0-81481A4021B3",
  },
];

const categories = ["Todas", "Google Cloud & AI", "Data & SQL", "Base & Outros"] as const;
const featuredCount = 6;

function Certifications() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todas");
  const [expanded, setExpanded] = useState(false);

  const filteredCertifications = certifications.filter(
    (certification) => activeCategory === "Todas" || certification.category === activeCategory
  );
  const visibleCertifications = expanded
    ? filteredCertifications
    : filteredCertifications.slice(0, featuredCount);
  const hiddenCount = filteredCertifications.length - visibleCertifications.length;

  const selectCategory = (category: (typeof categories)[number]) => {
    setActiveCategory(category);
    setExpanded(false);
  };

  return (
    <section className="certifications-section" id="certifications" aria-labelledby="certifications-heading">
      <div className="certifications-container">
        <h1 id="certifications-heading">Certificações &amp; cursos</h1>
        <div className="certification-tabs" role="group" aria-label="Filtrar certificações por categoria">
          {categories.map((category) => (
            <button
              key={category}
              className={`certification-tab${activeCategory === category ? " active" : ""}`}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => selectCategory(category)}
            >
              {category}
              {category === "Todas" && <span className="certification-count">{certifications.length}</span>}
            </button>
          ))}
        </div>

        <div
          className={`certifications-grid${expanded ? " expanded" : ""}`}
          id="certification-list"
          aria-live="polite"
        >
          {visibleCertifications.map((certification) => (
            <article className="certification-card" key={certification.credentialUrl}>
              <div className="certification-card-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <div className="certification-card-content">
                <span className="certification-category">{certification.category}</span>
                <h2>{certification.name}</h2>
                <p>{certification.issuer}</p>
                <a
                  className="credential-link"
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Exibir credencial <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {!expanded && hiddenCount > 0 && (
          <button
            className="certifications-toggle"
            type="button"
            aria-expanded={false}
            aria-controls="certification-list"
            onClick={() => setExpanded(true)}
          >
            Ver todas as certificações (+{hiddenCount})
          </button>
        )}
        {expanded && filteredCertifications.length > featuredCount && (
          <button
            className="certifications-toggle"
            type="button"
            aria-expanded={true}
            aria-controls="certification-list"
            onClick={() => setExpanded(false)}
          >
            Mostrar menos (−)
          </button>
        )}
      </div>
    </section>
  );
}

export default Certifications;
