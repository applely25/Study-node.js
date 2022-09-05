const express = require("express");

const app = express();

const PORT = 8080;

app.set("port", PORT);

app.get("/", (req, res) => {
  res.send("유정아 이 글씨 잘 보이면 말해줘줘주저주저ㅜ저");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;