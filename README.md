
# 🌐 BFF - Backend For Frontend (Blog API)

Este é um **Backend For Frontend (BFF)** simples desenvolvido em **Node.js + Express**, que serve como intermediário entre o frontend do blog em Vue.js e a [NewsAPI.org](https://newsapi.org/).

## 🧠 O que ele faz?

- Faz requisições à API pública da **NewsAPI.org**.
- Filtra e transforma os dados para um formato mais simples.
- Retorna um array de postagens para ser consumido pelo frontend.

## 📦 Tecnologias utilizadas

- Node.js
- Express
- Axios
- dotenv (para variáveis de ambiente)

## ▶️ Como rodar o projeto localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/matheuslns/fiap-bff-blog.git
   cd fiap-bff-blog
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Crie um arquivo `.env` na raiz do projeto**:
   ```
   API_KEY=sua_chave_da_newsapi.org
   ```

4. **Execute o servidor**:
   ```bash
   npm start
   ```

O servidor estará disponível em: `http://localhost:3000/posts`

## 🔗 Endpoint disponível

### `GET /posts`

Retorna um array de objetos no seguinte formato:

```json
[
  {
    "id": 1,
    "title": "Título da notícia",
    "description": "Resumo da notícia",
    "content": "Conteúdo completo ou trecho",
    "author": "Nome do autor",
    "publishedAt": "2025-06-10T12:00:00Z",
    "url": "https://link-da-noticia.com",
    "urlToImage": "https://link-da-imagem.jpg"
  },
  ...
]
```

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
