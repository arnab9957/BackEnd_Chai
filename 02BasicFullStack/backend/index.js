import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });

//Get a list of 5 jokes where they have id, title nad content

app.get("/jokes", (req, res) => {
    const jokes = [
        { id: 1, title: "Joke 1", content: "This is the content of joke 1" },
        { id: 2, title: "Joke 2", content: "This is the content of joke 2" },
        { id: 3, title: "Joke 3", content: "This is the content of joke 3" },
        { id: 4, title: "Joke 4", content: "This is the content of joke 4" },
        { id: 5, title: "Joke 5", content: "This is the content of joke 5" },
    ];
    res.json(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server Ready at http://localhost:${port}`);
});
