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
        username: "@GBlog",
        content: "GeeksforGeeks provides an opportunity for all techie bloggers to reach out to other geeks. If you are passionate about Technology, we invite you to write a guest blog. GBlog is a page for guests (tech writers) for those who are interested in technical writing.You can write about anything be it new technology, operating systems, programming languages, website development, open source, or anything and everything about computer science. Advantages of Writing at GBlog:Build your brand: Showcase your expertise to a vast audience, establishing yourself as a thought leader in the tech community. Connect with peers: Engage in meaningful discussions with fellow tech enthusiasts and learn from their perspectives.Featured publication: Selected blogs will be published on the homepage and Facebook page of GeeksforGeeks.Boost your portfolio: Published articles on GeeksforGeeks enhance your credibility and stand out on your resume.",
        password: "1234"
    },
    {
        id: uuidv4(),
        username: "@ABGHJK",
        content: "GeeksforGeeks provides an opportunity for all techie bloggers to reach out to other geeks. If you are passionate about Technology, we invite you to write a guest blog. GBlog is a page for guests (tech writers) for those who are interested in technical writing.You can write about anything be it new technology, operating systems, programming languages, website development, open source, or anything and everything about computer science. Advantages of Writing at GBlog:Build your brand: Showcase your expertise to a vast audience, establishing yourself as a thought leader in the tech community. Connect with peers: Engage in meaningful discussions with fellow tech enthusiasts and learn from their perspectives.Featured publication: Selected blogs will be published on the homepage and Facebook page of GeeksforGeeks.Boost your portfolio: Published articles on GeeksforGeeks enhance your credibility and stand out on your resume.",
        password: "abcd"
    },
    {
        id: uuidv4(),
        username: "@sSKLLYF",
        content: "GeeksforGeeks provides an opportunity for all techie bloggers to reach out to other geeks. If you are passionate about Technology, we invite you to write a guest blog. GBlog is a page for guests (tech writers) for those who are interested in technical writing.You can write about anything be it new technology, operating systems, programming languages, website development, open source, or anything and everything about computer science. Advantages of Writing at GBlog:Build your brand: Showcase your expertise to a vast audience, establishing yourself as a thought leader in the tech community. Connect with peers: Engage in meaningful discussions with fellow tech enthusiasts and learn from their perspectives.Featured publication: Selected blogs will be published on the homepage and Facebook page of GeeksforGeeks.Boost your portfolio: Published articles on GeeksforGeeks enhance your credibility and stand out on your resume.",
        password: "pass"
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
    let { username, content, password } = req.body;
    blogs.push({ id, username, content, password });
    res.redirect("/blogs");
});

app.get("/blogs/:id", (req, res) => {
    let { id } = req.params;
    let post = blogs.find((p) => id === p.id);
    res.render("show", { post });
});

app.patch("/blogs/:id", (req, res) => {
    let { id } = req.params;
    let { content, password } = req.body;
    let post = blogs.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found.");
    }

    if (post.password !== password) {
        return res.render("error", { message: "Incorrect password. Try again." });
    }

    post.content = content;
    res.redirect("/blogs");
});

app.get("/blogs/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = blogs.find((p) => id === p.id);
    res.render("update", { post });
});

// Route to show delete confirmation form
app.get("/blogs/:id/delete", (req, res) => {
    let { id } = req.params;
    let post = blogs.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found.");
    }

    res.render("delete", { post });
});

app.delete("/blogs/:id", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let post = blogs.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found.");
    }

    if (!password || post.password !== password) {
        return res.render("error", { message: "Incorrect password. Try again." });
    }

    blogs = blogs.filter((p) => p.id !== id);
    res.redirect("/blogs");
});


const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
