# API REST - Sistema de Gerenciamento Escolar

Esta é uma API RESTful desenvolvida em **Node.js** com **Express** para gerenciar alunos de uma escola. 

O objetivo deste projeto foi recriar um dos meus primeiros sistemas de estudo, aplicando conceitos mais sólidos de arquitetura, segurança e boas práticas de desenvolvimento back-end. A API fornece todos os endpoints necessários para que um front-end (atualmente sendo desenvolvido em **React**) possa consumir os dados e gerenciar o sistema.

## 🚀 Funcionalidades

* **Autenticação e Segurança:**
  * Criação de usuários administradores com hash de senhas.
  * Autenticação via **Token JWT** (JSON Web Token).
  * Rotas protegidas que exigem usuário logado.
* **Gestão de Alunos (CRUD):**
  * Cadastro, listagem, atualização e exclusão de alunos.
  * Upload de fotos de perfil para os alunos.
* **Infraestrutura e Deploy:**
  * API em produção rodando na **Google Cloud Platform (GCP)**.
  * Uso de **NGINX** como proxy reverso.
  * Gerenciamento de processos 24/7 com **PM2**.

## 🛠️ Tecnologias Utilizadas

* **Node.js** e **Express.js** - Construção da API
* **MariaDB** - Banco de dados relacional
* **JWT (jsonwebtoken)** - Autenticação
* **bcryptjs** - Criptografia de senhas
* **Multer** - Upload de arquivos (fotos dos alunos)
* **PM2** - Gerenciador de processos em produção
* **NGINX** - Servidor web / Proxy reverso

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
* Um banco de dados [MariaDB](https://mariadb.org/) rodando localmente ou em nuvem.

## 💻 Como rodar o projeto localmente

**1. Clone o repositório:**
```bash
git clone [https://github.com/alvesscristhian/api-rest-escola.git](https://github.com/alvesscristhian/api-rest-escola.git)
```

**2. Acesse a pasta do projeto:**
```bash
cd api-rest-escola
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Configure as Variáveis de Ambiente:**
Crie um arquivo `.env` na raiz do projeto tendo como base o arquivo `.env.example` (se houver) e preencha com as suas credenciais do banco de dados e segredo do JWT:

```env
DATABASE=nome_do_seu_banco
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=seu_usuario
DATABASE_PASSWORD=sua_senha

TOKEN_SECRET=sua_chave_secreta_jwt
TOKEN_EXPIRATION=7d
```

**5. Inicie o servidor em modo de desenvolvimento:**
```bash
npm run dev
```

A API estará rodando em `http://localhost:3000` (ou na porta que você configurou).

## ☁️ Deploy

O deploy desta aplicação foi realizado em uma máquina virtual na **GCP (Google Cloud Platform)**. O fluxo é gerenciado pelo **PM2** para garantir que a aplicação se mantenha online em caso de reinicialização do servidor, enquanto o **NGINX** recebe as requisições na porta 80/443 e as redireciona para a porta interna da aplicação Node.js.

## 📝 Próximos Passos

- [ ] Finalizar o desenvolvimento do Front-end utilizando **React**.
- [ ] Integrar o Front-end com esta API.
