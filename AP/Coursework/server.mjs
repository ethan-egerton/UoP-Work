import express from "express";

const app = express();

app.use(express.static('client'));

app.use((req, res) => {
    res.status(404).redirect('webpages/404.html');
})

console.log("started!")
app.listen(8080)