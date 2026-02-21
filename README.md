# 🎧 Spotify Clone – Full Stack Web Application

Aplicação **Full Stack** inspirada no Spotify Web, desenvolvida com foco em **boas práticas de frontend e backend**, arquitetura moderna e integração com banco de dados.

O projeto foi construído durante um evento prático, simulando um **ambiente real de desenvolvimento**, desde a criação da API até o consumo dos dados no frontend.

🔗 **Demo Frontend:** https://seu-projeto.vercel.app  
🔗 **API Backend:** https://seu-projeto.onrender.com  

---

## 🧠 Visão Geral do Projeto

A aplicação permite visualizar:
- Artistas populares
- Músicas populares
- Interface moderna e responsiva inspirada no Spotify

Todos os dados são consumidos de uma **API REST própria**, desenvolvida com Node.js, Express e MongoDB.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React.js
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- CORS

---

## 🧱 Arquitetura

O projeto segue o princípio de **separação de responsabilidades**, com frontend e backend desacoplados:

```bash
📦 projeto-spotify
 ┣ 📂 frontend
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 services
 ┃ ┗ 📜 App.tsx
 ┣ 📂 backend
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 config
 ┃ ┗ 📜 server.ts
 ┗ 📜 README.md
```

⚙️ Como Rodar o Projeto Localmente

🔹 Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/projeto-spotify.git
cd projeto-spotify
```
🔹 Backend
```bash
cd backend
npm install
```
Crie o arquivo .env:
```bash
PORT=3333
MONGO_URI=sua_string_mongodb
```
Rodar o servidor:
```bash
npm run dev
```
Backend disponível em:
```bash
http://localhost:3333
```
🔹 Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend disponível em:
```bash
http://localhost:5173
```
🚀 Deploy
Backend – Render

Plataforma: Render

Tipo: Web Service

Start Command:
```bash
npm run start
```
Frontend – Vercel

Plataforma: Vercel

Framework Preset: Vite

Build Command:
```bash
npm run build
```
---

📌 Principais Aprendizados

Desenvolvimento Full Stack com React e Node.js

Criação e consumo de APIs REST

Modelagem de dados com MongoDB

Integração frontend + backend

Uso de TypeScript para código mais seguro

Estilização moderna com Tailwind CSS

Deploy de aplicações reais em produção

---

📄 Licença

Projeto desenvolvido para fins educacionais e portfólio profissional.


👨‍💻 Autor

Julio Resende - Desenvolvedor Web


---

# 2️⃣ Deploy no **Render + Vercel** (Passo a Passo)

## 🔹 Backend no Render

1. Suba o backend para o GitHub
2. Acesse: https://render.com
3. **New → Web Service**
4. Conecte o repositório
5. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm run start`
6. Em **Environment Variables**:
   - `MONGO_URI`
   - `PORT`

✅ API publicada

---

## 🔹 Frontend no Vercel

1. Suba o frontend para o GitHub
2. Acesse: https://vercel.com
3. **New Project**
4. Configure:
   - **Framework:** Vite
   - **Root Directory:** `frontend`
5. Em **Environment Variables**:
```env
VITE_API_URL=https://sua-api.onrender.com

No api.ts:

baseURL: import.meta.env.VITE_API_URL

✅ Frontend publicado
