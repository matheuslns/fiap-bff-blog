require('dotenv').config();

const express = require('express');

const rateLimit = require('express-rate-limit');

const cors = require('cors');

const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: 'Muitas requisições. Tente novamente mais tarde.' },
});

app.use(limiter);

app.use('/posts', postRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);

app.listen(PORT, () => console.log(`BFF rodando na porta ${PORT}`));