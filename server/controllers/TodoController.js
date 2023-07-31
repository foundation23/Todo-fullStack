import {Todo} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class TodoController {
    async create(req, res, next) {
        try {
            let {title, ending, creation, created, listId} = req.body
            const todo = await Todo.create({title, ending, creation, created, listId })
            return res.json(todo)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const {listId} = req.query
        let todos;
        if (listId) {
            todos = await Todo.findAll({where: {listId}})
        } else {
            todos = await Todo.findAll()
        }
        return res.json(todos)
    }

    async delete(req, res) {
        const {id} = req.params
        const todos = await Todo.destroy({where: {id}})
        return res.json(todos)
    }

    async getOne(req, res) {
        const {id} = req.params
        const todo = await Todo.findOne({where: {id}})
        return res.json(todo)
    }

    async update(req, res) {
        const {id} = req.params
        let {created, title} = req.body
        const todo = await Todo.update({created, title},
            {where: {id}})
        return res.json(todo)
    }

    async searchTodo(req, res) {
        try {
            let searchName = req.query.search
            let todos = await Todo.findAll()
            todos = todos.filter(todo => todo.name.includes(searchName))
            return res.json(todos)
        } catch (e) {
            return res.json({message: 'Ошибка при поиске'})
        }
    }


}

export default new TodoController