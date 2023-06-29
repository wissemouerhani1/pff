const express = require('express');
const { courrier } = require('./models');

const app = express();

app.get('/api/courriers', async (req, res) => {
  try {
    const data = await courrier.findAll();
    res.json(data);
  } catch (error) {
    console.error('Error fetching courrier data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
