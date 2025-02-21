// Create web server
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:id

// Create web server
const express = require('express');
const app = express();

// Create a route for comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Create a route for comments/new
app.get('/comments/new', (req, res) => {
    res.send('This is the new comments page');
});

// Create a route for comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('This is the comments page for id: ' + req.params.id);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});