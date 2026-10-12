import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders Maryanna’s portfolio and featured projects', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Maryanna Conceição Silva' })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'GitHub de Maryanna' })[0])
    .toHaveAttribute('href', 'https://github.com/MaryannaSilva');
  expect(screen.getAllByRole('link', { name: 'LinkedIn de Maryanna' })[0])
    .toHaveAttribute('href', 'https://www.linkedin.com/in/maryanna-c-silva');
  expect(screen.getByText('São Paulo, SP — Brasil')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Sobre mim' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Competências' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Projetos em destaque' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Certificações & cursos' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Experiência & formação' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Contato' })).toHaveClass('contact-cta');
  expect(screen.getByRole('heading', { name: 'Data Scientist Pleno' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Data Scientist Junior' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Analista Financeiro Júnior' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Iniciação Científica: Otimização Linear' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Integrante bolsista do PET – Matemática' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Iniciação Científica: Paciência Búlgara e Sistemas Dinâmicos' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'MBA em Data Science and Analytics' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Licenciatura em Matemática' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Summer Course: Teaching English as a Second or Foreign Language' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Membro do projeto UbatubaSat' })).toBeInTheDocument();
  expect(document.getElementById('ubatubasat')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Causal Inference API' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Media Mix & Cross-Correlation' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Conversion Funnel Modeling' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Anomaly Detection' })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Projetos em destaque' }).compareDocumentPosition(
      screen.getByRole('heading', { name: 'Experiência & formação' })
    ) & Node.DOCUMENT_POSITION_FOLLOWING
  ).toBeTruthy();
  expect(
    screen.getByRole('heading', { name: 'Projetos em destaque' }).compareDocumentPosition(
      screen.getByRole('heading', { name: 'Certificações & cursos' })
    ) & Node.DOCUMENT_POSITION_FOLLOWING
  ).toBeTruthy();
});

test('shows six featured certificates, filters by category, and expands the complete list', () => {
  render(<App />);

  const section = screen.getByRole('region', { name: 'Certificações & cursos' });
  expect(section.querySelectorAll('.certification-card')).toHaveLength(6);
  expect(screen.getByRole('button', { name: 'Ver todas as certificações (+9)' })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /Exibir credencial/ })[0]).toHaveAttribute('target', '_blank');

  fireEvent.click(screen.getByRole('button', { name: 'Google Cloud & AI' }));
  expect(section.querySelectorAll('.certification-card')).toHaveLength(6);

  fireEvent.click(screen.getByRole('button', { name: 'Todas 15' }));
  fireEvent.click(screen.getByRole('button', { name: 'Ver todas as certificações (+9)' }));
  expect(section.querySelectorAll('.certification-card')).toHaveLength(15);
});

test('directs contact to LinkedIn without exposing an e-mail address', () => {
  render(<App />);

  const contactSection = screen.getByRole('region', { name: 'Contato' });
  expect(screen.getByRole('link', { name: 'Falar comigo no LinkedIn' }))
    .toHaveAttribute('href', 'https://www.linkedin.com/in/maryanna-c-silva');
  expect(contactSection.querySelector('a[href^="mailto:"]')).toBeNull();
  expect(contactSection).not.toHaveTextContent('@');
});

test('toggles the color theme from an accessible button', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Ativar modo claro' }));
  expect(screen.getByRole('button', { name: 'Ativar modo escuro' })).toBeInTheDocument();
});

test('shows more project details when a project card is flipped', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Ver mais detalhes sobre Causal Inference API' }));

  expect(screen.getByText('Disponibilização de métodos de inferência causal por meio de uma API REST.')
    .closest('.project-back')).toHaveAttribute('aria-hidden', 'false');

  fireEvent.click(screen.getByRole('button', { name: 'Voltar ao resumo de Causal Inference API' }));
  expect(screen.getByRole('button', { name: 'Ver mais detalhes sobre Causal Inference API' }))
    .toHaveAttribute('aria-expanded', 'false');
});

test('highlights the project details action', () => {
  render(<App />);

  expect(screen.getByRole('button', { name: 'Ver mais detalhes sobre Causal Inference API' }))
    .toHaveClass('project-flip-button');
});

test('shows a rocket button after scrolling and returns smoothly to the top', () => {
  const scrollTo = jest.fn();
  const originalScrollTo = window.scrollTo;
  const originalMatchMedia = window.matchMedia;
  const originalScrollY = window.scrollY;
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 });
  window.scrollTo = scrollTo;
  window.matchMedia = jest.fn().mockReturnValue({ matches: false });

  render(<App />);
  fireEvent.scroll(window);

  fireEvent.click(screen.getByRole('button', { name: 'Voltar ao topo' }));
  expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, left: 0, behavior: 'smooth' });

  window.scrollTo = originalScrollTo;
  window.matchMedia = originalMatchMedia;
  Object.defineProperty(window, 'scrollY', { configurable: true, value: originalScrollY });
});
