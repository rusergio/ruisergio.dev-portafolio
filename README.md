# ruisergio-portafolio

Site de portfólio pessoal com foco em apresentação profissional, projetos e
contato. Construído com Next.js, React e Tailwind CSS.

## Visão geral

Este projeto reúne:

- Apresentação do profissional e resumo de skills.
- Seções de experiência e projetos.
- Botões de contato e download de currículo.
- Layout moderno com efeitos visuais suaves.
- Suporte a tema claro/escuro e idioma.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase (opcional, caso use autenticação/integrações)

## Como rodar localmente

1. Instale as dependências:
   ```bash
   pnpm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```

3. Acesse em: `http://localhost:3000`

## Scripts úteis

- `pnpm dev` — roda o projeto em modo desenvolvimento
- `pnpm build` — gera build de produção
- `pnpm start` — inicia o app em produção
- `pnpm lint` — executa o lint

## Personalização rápida

Alguns pontos comuns para ajustar:

- Textos e conteúdo: `lib/translations.ts`
- Hero e botões principais: `components/portfolio/hero.tsx`
- Navegação: `components/portfolio/header.tsx`
- Estilos globais: `app/globals.css`

## Deploy

Você pode publicar o projeto em plataformas como Vercel, Netlify ou
Cloudflare Pages. Para Vercel:

1. Conecte o repositório.
2. Configure o build (Next.js padrão).
3. Faça o deploy.

## Licença

Uso livre para fins pessoais e profissionais. Se quiser publicar o projeto
como open source com licença específica, ajuste esta seção.
