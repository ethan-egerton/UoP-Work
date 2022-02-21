import express from "express";

const app = express();

app.use(express.static('client'));

app.use((req, res) => {
    res.status(404).redirect('webpages/404.html');
})

console.log("started on http://127.0.0.1:8080");
app.listen(8080);