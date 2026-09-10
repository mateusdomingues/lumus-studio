# Lumus Studio

Site conceitual para um estúdio de fotografia e cobertura de eventos, criado para explorar narrativa visual, transições de página e uma experiência editorial responsiva.

[Ver projeto em produção](https://lumus-studio.vercel.app)

## Objetivo

Organizar diferentes tipos de eventos em uma experiência que valoriza as imagens sem perder clareza de navegação. Eventos de marca ocupam o centro da comunicação, enquanto festivais, shows, casamentos e festas de 15 anos são apresentados como histórias independentes.

## Funcionalidades

- Hero com sequência automática de fotografias
- Portfólio dividido por categorias
- Páginas dinâmicas para cada história
- Galerias horizontais e seções cinematográficas
- Animações acionadas pelo scroll
- Navegação responsiva
- Sitemap e robots gerados pela aplicação
- Metadados e textos alternativos para imagens

## Tecnologias

- Next.js
- React
- TypeScript
- GSAP
- Tailwind CSS
- Vercel

## Arquitetura

O conteúdo dos projetos fica centralizado em `src/data/projects.ts`. Cada história possui slug, categoria, capa e galeria. A rota `src/app/stories/[slug]` usa esses dados para montar as páginas individuais, evitando duplicação de estrutura.

As seções da página inicial estão separadas em `src/sections`, os componentes compartilhados ficam em `src/components` e a configuração institucional em `src/data/site.ts`.

## Decisões e desafios

A principal decisão foi tratar as fotografias como parte da navegação, e não como simples elementos decorativos. As animações foram isoladas por seção para facilitar manutenção e controlar o ritmo da experiência.

Também foi necessário equilibrar imagens grandes, transições e responsividade sem esconder a hierarquia do conteúdo.

## Executar localmente

```bash
git clone https://github.com/mateusdomingues/lumus-studio.git
cd lumus-studio
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run lint
npm run build
```

## Observação

Este é um projeto de portfólio. As imagens utilizadas têm créditos documentados em `public/images/CREDITS.md`.
