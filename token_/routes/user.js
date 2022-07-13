const router = require('express')();

const controller = require('../controllers/user');

router.post('/signUp', controller.signUp);
router.post('/login',controller.login );

module.exports = router;