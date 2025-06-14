const axios = require('axios');

async function getPosts() {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=tecnologia&language=pt&sortBy=publishedAt&apiKey=${process.env.API_KEY}`);
  return response.data.articles;
}

module.exports = { getPosts };