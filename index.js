const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>UPDATING ON THE VERCEL SITE</h1>');
});

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.json({
    message: `Hello ${name}!`
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});