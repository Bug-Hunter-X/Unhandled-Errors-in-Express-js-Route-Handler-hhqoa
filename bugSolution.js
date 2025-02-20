const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' }); // Send a JSON error response
      return; // Important: Stop further execution
    } else if (!user) {
      res.status(404).json({ error: 'User not found' }); // Send a JSON 404 response
      return; // Important: Stop further execution
    } else {
      res.json(user);
    }
  });
});

// ... other routes ...

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});