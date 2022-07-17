const router = require('express')();
const User = require('./user');

router.use("/users", User);

module.exports = router;