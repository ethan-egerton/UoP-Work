import express from 'express';

const port = 8080;

const app = express();

app.use(express.static('client'));

app.get('/invite/:inviteId', (req, res) => {
  console.log(req.params);
  res.redirect('/index.html');
  res.send(req.params);
});

app.use((req, res) => {
  res.status(404).redirect('/index.html');
});

console.log(`started on http://127.0.0.1:${port}`);
app.listen(port);
