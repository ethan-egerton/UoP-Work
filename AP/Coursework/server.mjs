import express from 'express';

const port = 8080;
let activeLobbies = {
  lobbies: [],
};

function checkActiveLobbies(id) {
  if (activeLobbies.lobbies.includes(id)) {
    return true;
  } else { return false; }
}

const app = express();

app.use(express.static('client'));

app.get('/invite/:id', (req, res) => {
  console.log(req.params);
  res.redirect('/index.html');
  res.send(req.params);
});

app.get('/createLobby/:id', (req, res) => {
  activeLobbies.lobbies.push(req.params.id);
  res.sendStatus(200);
});

app.get('/joinLobby/:id', (req, res) => {
  if (checkActiveLobbies(req.params.id) === true) {
    res.sendStatus(200);
  } else { res.sendStatus(500); }
});

app.get('/getActiveLobbies', (req, res) => {
  res.json(activeLobbies);
});

/*
app.use((req, res) => {
  res.status(404).redirect('/index.html');
});
*/

console.log(`started on http://127.0.0.1:${port}`);
app.listen(port);
