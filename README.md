<h1 align="center">
	<img alt="My Wedding Invite" src=".github/logo.png" width="320px" />
</h1>

# my-wedding-invite

Bem-vindo ao projeto **My Wedding Invite!** Este é um site criado com o propósito de servir como um portfólio, simulando um convite de casamento virtual. Ele fornece informações sobre o evento, o casal e permite que os convidados confirmem a presença. Essa confirmação é enviada via e-mail tanto para o casal, quanto para o convidado que acabou de confirmar.

## 🎯 Objetivo
Este projeto foi desenvolvido com proposito de estudo:
- Criação de API com Node.js e biblioteca Nodemailer;
- Uso de testes no front com a ferramente Cypress;
- Next.js 13 com pasta app e páginas SSR.

## 📝Documentação

Para rodar esse projeto se faz necessário, antes de tudo, clocar o repositório e instalar as dependências de projeto através do comando:

```bash
  npm install
```

Após isso, basta rodar um comando para conseguir rodar o projeto localmente:

```bash
  npm run dev
```
Vale ressaltar que a versão do Next.js escolhida para o projeto foi a versão 14, com a pasta app e utilizando o princípios de páginas SSR. Alguns dos componentes precisaram ser CSR para garintir a interação do usuário.

## 🧪 Testes

Foram criados testes para garantir que a interface do usuário funcione conforme o esperado, garantindo qualidade e estabilidade da aplicação.
O Cypress é uma ferramenta de teste de front-end focada em Testes End-to-End (E2E).

Para rodar os testes, rode o seguinte comando

```bash
  npx cypress open
```

## 🛠 Tecnologias e funcionalidades
- Next.js
- Typescript
- Tailwind.css
- Cypress
- Nodemailer
