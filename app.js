const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const port = 4000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());
app.use(cors());

// Internal list to store items
let itemList = ['Hacer las compras', 'Ir al cine'];

// Endpoint to get items
app.get('/items', (req, res) => {
  res.json({ items: itemList });
});

// Endpoint to add items
app.post('/items', (req, res) => {
  const newItem = req.body.item;
  console.log(newItem);
  if (!newItem) {
    return res.status(400).json({ error: 'Item is required' });
  }

  itemList.push(newItem);
  res.json({ message: 'Item added successfully', newItem });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
