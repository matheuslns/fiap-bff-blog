const express = require('express');
const router = express.Router();

const { getPosts } = require('../services/blogService');

router.get('/', async (req, res) => {
  try {
    const result = await getPosts();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao consultar os posts' });
  }
});

module.exports = router;