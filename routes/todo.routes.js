const express = require('express')
const router = express.Router()
const todoControllers = require('../controllers/todo.controllers')

router.get('/todos', todoControllers.getTodo)
router.get('/todos/:id', todoControllers.getTodoID)
router.post('/todos', todoControllers.createTodo)
router.put('/todos/:id', todoControllers.updateTodo)
router.delete('/todos/:id', todoControllers.deleteTodo)


module.exports = router