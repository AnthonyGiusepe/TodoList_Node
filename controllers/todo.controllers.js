const Todo = require("../models/todo.model")

async function getTodo(req, res) {

    try {

        const todos = await Todo.find()

        console.log(todos)

        return res.status(200).send({
            ok: true,
            message: "Obteniendo los Todo List",
            todos: todos
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("Error al obtener los Todo list")
        
    }

}

async function getTodoID(req, res) {

    try {

        const { id } = req.params

        const todos = await Todo.findById(id)

        console.log(todos)
    
        return res.status(200).send({
            ok: true,
            message: "Todo List encontrada",
            todos: todos
        })
        
    } catch (error) {

        console.log(error)
        return res.status(500).send("Error al ontener el Todo list de la DB")
        
    }

}

async function createTodo(req, res) {
    // const todoNew = {
    //     title: "Hola",
    // }
    
    // const todo = new Todo(todoNew)
    // await todo.save()
    // return res.send('Creando todo list')

    const todo = new Todo(req.body)

    todo.save().then((nuevoTodo) => {

        console.log(nuevoTodo)
        return res.status(201).send(nuevoTodo)

    }).catch(error => {
        console.log(error)
        return res.send('El Todo list no se pudo crear')
    })
}

async function updateTodo(req, res) {
    
    const { id } = req.params

    const Todoupdate = await Todo.findByIdAndUpdate(id, req.body, { new: true } )

    Todoupdate.save().then((updateTodo) => {

        return res.status(201).send({
            ok: true,
            message: "Todo list actualizada",
            updateTodo: updateTodo
        })

    }).catch(error => {
        console.log(error)
        return res.send('No se pudo actualizar Todo list')
    })

}

async function deleteTodo(req, res) {
    
    try {

        const { id } = req.params

        const todosDelete = await Todo.findByIdAndDelete(id)

        console.log(todosDelete)
    
        return res.status(200).send({
            ok: true,
            message: "Todo List eliminada",
            todosDelete: todosDelete
        })
        
    } catch (error) {
        
        console.log(error)
        return res.status(500).send("Error al eliminar la Todo list")
        
        
    }


}

module.exports = {
    getTodo,
    getTodoID,
    createTodo,
    updateTodo,
    deleteTodo

}