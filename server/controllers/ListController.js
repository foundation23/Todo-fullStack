import {List, Todo} from "../models/models.js";
import ApiError from '../error/ApiError.js'


class ListController {
    async create(req, res, next) {
        try {
            const {title} = req.body
            const list = await List.create({title})
            return res.json(list)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const lists = await List.findAll()
        return res.json(lists)
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const lists = await List.destroy({where: {id}})
            return res.json(lists)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    async getOne(req, res) {
        const {id} = req.params
        const list = await Todo.findOne({where: {id}})
        return res.json(list)
    }
}

export default new ListController