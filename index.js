const express = require("express");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let blogs = [
    {
        id: uuidv4(),
        
        username: "@XYZZZZZZ",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quidem!",
    },
    {
        id: uuidv4(),
        username: "@ABGHJK",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quidem!",
    },
    {
        id: uuidv4(),
        username: "@sSKLLYF",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quidem!",
    }
];

app.get("/blogs", (req, res) => {
    res.render("index", { blogs });
});

app.get("/blogs/new", (req, res) => {
    res.render("new");
});

app.post("/blogs", (req, res) => {
    let id = uuidv4();
    let { username, content } = req.body;
    blogs.push({ id, username, content });
    res.redirect("/blogs");
});

app.get("/blogs/:id", (req, res) => {
    let { id } = req.params;
    let post = blogs.find((p) => id === p.id);
    res.render("show", { post });
});

app.patch("/blogs/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = blogs.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/blogs");
});

app.get("/blogs/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = blogs.find((p) => id === p.id);
    res.render("update", { post });
});

app.delete("/blogs/:id", (req, res) => {
    let { id } = req.params;
    blogs = blogs.filter((p) => id !== p.id);
    res.redirect("/blogs");
});

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});