const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // No proper error handling here
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      // Missing 404 handling for non-existent user
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});