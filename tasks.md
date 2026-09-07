LUMUS STUDIO — tasks.md

Objetivo

Construir o site premium da Lumus Studio com prioridade máxima para fotografia, ritmo visual e animações cinematográficas.

O desenvolvimento deve seguir este arquivo em ordem.

Não improvisar novas seções sem necessidade.

STATUS DE EXECUÇÃO — 06/09/2026

[x] PHASE 01 — FOUNDATION
[x] PHASE 02 — IMAGE SYSTEM (fotografias provisórias do Unsplash, já separadas e creditadas)
[x] PHASE 03 — PRELOADER
[x] PHASE 04 — NAVIGATION
[x] PHASE 05 — HERO
[x] PHASE 06 — HERO SCROLL TRANSITION
[x] PHASE 07 — MANIFESTO
[x] PHASE 08 — SELECTED STORIES
[x] PHASE 09 — PROJECT PAGES
[x] PHASE 10 — BRAND EVENTS
[x] PHASE 11 — CINEMATIC SCROLL
[x] PHASE 12 — HORIZONTAL GALLERY
[x] PHASE 13 — EVENTS INDEX
[x] PHASE 14 — THE LUMUS APPROACH
[x] PHASE 15 — ABOUT
[x] PHASE 16 — FINAL CTA
[x] PHASE 17 — FOOTER
[x] PHASE 18 — RESPONSIVE POLISH
[x] PHASE 19 — PERFORMANCE (Lighthouse local de produção: 94)
[x] PHASE 20 — ACCESSIBILITY
[x] PHASE 21 — SEO (implementação concluída; domínio, e-mail e Instagram precisam de confirmação antes de publicar)
[x] PHASE 22 — FINAL VISUAL QA

Decisão técnica registrada: Lenis não foi adicionado. O scroll nativo, com GSAP + ScrollTrigger apenas nas sequências necessárias, reduz JavaScript e preserva desempenho e acessibilidade.

PHASE 01 — FOUNDATION

Criar projeto em Next.js + TypeScript

Configurar Tailwind CSS

Configurar estrutura de pastas

Criar /components

Criar /sections

Criar /lib

Criar /data

Criar /public/images

Adicionar GSAP

Adicionar ScrollTrigger

Avaliar Lenis para smooth scroll

Configurar fontes

Criar design tokens

Criar variáveis de cor

Configurar responsive breakpoints

Configurar metadata base

Criar favicon temporário textual LUMUS

PHASE 02 — IMAGE SYSTEM

Definir estrutura de assets

Separar hero brand events

Separar selected stories

Separar festivals

Separar concerts

Separar weddings

Separar fifteen years

Separar backstage/about

Definir proporções corretas por imagem

Configurar next/image

Configurar lazy loading

Priorizar apenas imagens críticas da hero

Garantir object-position individual quando necessário

Estrutura sugerida:

/public/images/
  /hero/
  /brand-events/
  /festivals/
  /concerts/
  /weddings/
  /fifteen/
  /studio/

PHASE 03 — PRELOADER

Criar preloader fullscreen

Fundo preto

Logo LUMUS centralizada

Animação curta de opacity

Animação curta de scale

Remover preloader após carregamento essencial

Evitar bloqueio desnecessário

Testar retorno via navegação interna

Garantir que não apareça repetidamente sem necessidade

PHASE 04 — NAVIGATION

Criar header transparente sobre hero

LUMUS no canto esquerdo

MENU no canto direito

Criar menu fullscreen

Criar animação de abertura

Criar animação de fechamento

Adicionar links

Adicionar hover image preview no desktop

Criar versão mobile

Implementar fechamento via ESC

Implementar acessibilidade de foco

Links:

Stories

Brand Events

Studio

Contact

PHASE 05 — HERO

PRIORIDADE MÁXIMA.

Criar hero 100vh

Sem headline comercial

Sem CTA central

Sem texto desnecessário

Inserir apenas imagens de eventos de marcas

Criar autoplay

Criar loop

Definir duração entre slides

Criar crossfade cinematográfico

Criar clip-path reveal

Criar mask reveal

Criar subtle scale

Evitar repetição perceptível de animações

Adicionar contador 01 / 06

Adicionar scroll indicator opcional

Pausar corretamente em aba inativa

Garantir funcionamento mobile

Testar desempenho

Respeitar reduced motion

PHASE 06 — HERO SCROLL TRANSITION

Criar ScrollTrigger da saída da hero

Reduzir imagem gradualmente

Revelar fundo ivory

Controlar border radius apenas se fizer sentido

Conectar movimento diretamente ao scroll

Introduzir manifesto

Evitar corte visual entre seções

Testar em diferentes alturas de viewport

PHASE 07 — MANIFESTO

Criar texto editorial curto

Layout assimétrico

Aplicar serif display

Criar line reveal

Criar stagger sutil

Adicionar pequena descrição da Lumus

Manter muito espaço negativo

PHASE 08 — SELECTED STORIES

Criar inicialmente cinco projetos:

Brand Experience

Festival

Concert

Wedding

Fifteen

Para cada projeto:

título

categoria

local

ano

imagem principal

layout editorial próprio

hover sutil

link para projeto

Regras:

não usar cards tradicionais

variar composição

manter consistência tipográfica

Brand Experience aparece primeiro

PHASE 09 — PROJECT PAGES

Criar template dinâmico de story.

Hero de projeto

metadata

introdução curta

galeria editorial

imagens full bleed

imagens verticais

pares de imagens

navegação próximo projeto

CTA discreto

animações de entrada

lazy loading

PHASE 10 — BRAND EVENTS

Criar seção dedicada

Destacar eventos de marcas

Usar fotografia dominante

Criar texto mínimo

Apresentar tipos de eventos

Evitar cards

Criar interação editorial

Criar CTA para contato de marca

Tipos:

launches

activations

corporate experiences

fashion events

openings

conferences

private events

experiential marketing

PHASE 11 — CINEMATIC SCROLL

Criar seção preta

Criar fotografia central

Pin controlado

Expandir fotografia com scroll

Criar troca entre imagens

Evitar jump

Sincronizar opacity

Finalizar com frase curta

Testar scroll reverso

Criar fallback mobile

PHASE 12 — HORIZONTAL GALLERY

Desktop:

criar faixa horizontal

utilizar ScrollTrigger

pin da seção

converter scroll vertical em horizontal

variar proporções das imagens

evitar velocidade exagerada

criar entrada e saída suaves

Mobile:

remover pin

transformar em galeria vertical

preservar ordem das imagens

PHASE 13 — EVENTS INDEX

Criar lista editorial

Ordem:

Brand Events

Festivals

Concerts

Weddings

Fifteen

números grandes

hover preview desktop

imagem relacionada por categoria

transições suaves

link para galeria/projeto

versão mobile sem hover

PHASE 14 — THE LUMUS APPROACH

Etapas:

01 — Before
02 — During
03 — After

criar imagem sticky

criar textos por etapa

trocar imagem conforme scroll

criar transição entre estados

evitar cards

simplificar mobile

PHASE 15 — ABOUT

criar seção Studio

inserir imagem de bastidor

texto curto

linguagem editorial

animação suave

evitar elementos corporativos genéricos

PHASE 16 — FINAL CTA

imagem fullscreen

overlay discreto

headline curta

CTA textual

hover de seta

link de contato

versão mobile

PHASE 17 — FOOTER

logo LUMUS

Instagram

contato

localização genérica ou configurável

copyright

navegação mínima

Footer deve ser extremamente limpo.

PHASE 18 — RESPONSIVE POLISH

Testar:

320px

375px

390px

430px

768px

1024px

1280px

1440px

1920px

Corrigir:

overflow

imagens

tipografia

pinned sections

vh mobile

menu

gaps

touch interactions

PHASE 19 — PERFORMANCE

Lighthouse

otimizar LCP

otimizar CLS

reduzir JS desnecessário

otimizar imagens

revisar preload

revisar fonts

lazy-load galerias

matar ScrollTriggers corretamente

revisar animações fora da viewport

evitar memory leaks

PHASE 20 — ACCESSIBILITY

alt text

keyboard navigation

focus states

aria labels

reduced motion

contraste

menu acessível

links identificáveis

PHASE 21 — SEO

metadata

title

description

Open Graph

Twitter image

favicon

canonical

sitemap

robots

structured data apropriado

URLs amigáveis

PHASE 22 — FINAL VISUAL QA

Antes de considerar pronto:

hero impressiona sem texto?

fotos de marcas dominam a abertura?

transições parecem cinematográficas?

há alguma animação gratuita?

algum elemento parece IA/template?

alguma seção parece SaaS?

existe excesso de cards?

existe excesso de texto?

as fotografias respiram?

o ritmo entre claro e escuro funciona?

mobile continua premium?

as animações fazem sentido ao conteúdo?

hover states estão discretos?

performance permanece aceitável?

a Lumus parece um estúdio real e premium?

REGRA FINAL DE EXECUÇÃO

Ao implementar qualquer nova parte, seguir esta prioridade:

fotografia;

composição;

movimento;

tipografia;

conteúdo;

interface.

Nunca inverter essa ordem.

Se um efeito chamar mais atenção que a fotografia, reduzir ou remover o efeito.
