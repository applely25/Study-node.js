const router = require("express")();
const controller = require("../controllers/posts");

router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/', controller.deletePost);
router.get('/', controller.readAllPost);
router.get('/one',controller.readOnePost);

module.exports = router;
