const router = require("express")();
const posts = require("./posts");

router.use("/posts", posts);



module.exports = router;
