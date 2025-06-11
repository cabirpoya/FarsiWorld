const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Path to your SQLite DB
const dbPath = path.join(__dirname, 'Farssql', 'ganjoor.s3db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Example endpoint: get all rows from a table (replace 'your_table' with a real table name)
app.get('/data', (req, res) => {
  db.all('SELECT * FROM your_table LIMIT 10', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
