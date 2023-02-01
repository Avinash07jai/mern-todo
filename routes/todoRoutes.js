const {Router} = require("express");
const { getTodo, savetodo, updateTodo, deleteTodo } = require("../Controllers/todoController");

const router = Router();

router.get('/', getTodo)

router.post('/save', savetodo)

router.post('/updated', updateTodo)

router.post('/deleted', deleteTodo)

module.exports = router;