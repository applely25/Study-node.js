const router = require("express")();
const controller = require("../controllers/user");

router.post("/", controller.signUp);
router.post("/token", controller.login);

module.exports = router;