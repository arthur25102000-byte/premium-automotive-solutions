# AUTO/VF Premium Cars

Site institucional e vitrine de veículos da AUTO/VF Premium Cars, boutique de soluções automotivas.

## Páginas

- **Início**: apresentação, vitrine com filtros, chamada para quem quer vender o carro, essência da marca, serviços, etapas e contato.
- **Estoque**: lista completa com filtros por marca, ano e faixa de preço.
- **Veículo**: galeria de fotos, ficha técnica e contato direto sobre o modelo.
- **Serviços**, **Sobre** e **Contato**.

## Tecnologia

React com TanStack Start (renderização no servidor), Tailwind CSS e Vite.

## Rodar no computador

Requer Node.js 22 ou mais novo.

```sh
npm install
npm run dev
```

O site abre em http://localhost:8080.

Outros comandos:

- `npm run build`: gera a versão de produção em `.output/`.
- `npm run preview`: abre a versão de produção no computador.
- `npm test`: roda os testes.

## Onde editar o conteúdo

- **Contato** (WhatsApp, Instagram, telefone, e-mail e endereço): `src/lib/contact.ts`. Com o WhatsApp preenchido, o formulário e os botões abrem a conversa com a mensagem pronta. Com o campo vazio, os botões levam ao formulário.
- **Veículos**: `src/data/vehicles.ts`. Cada carro tem dados, foto de capa (`image`) e a lista de fotos da galeria (`gallery`). As imagens ficam em `src/assets/`.
- **Logo**: `src/assets/logo-autovf.png` (completa), `logo-autovf-wordmark.png` (cabeçalho) e `logo-vf.png` (monograma).
- **Cores, fontes e espaçamentos**: `src/styles.css`.

## Publicação

O projeto funciona em qualquer hospedagem com Node.js. Na Vercel, basta importar o repositório; o build é detectado automaticamente.
