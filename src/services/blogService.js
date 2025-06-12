const axios = require('axios');

async function getPosts() {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=computer&from=2025-05-11&sortBy=publishedAt&apiKey=${process.env.API_KEY}`);
  return response.data.articles;
}

module.exports = { getPosts };