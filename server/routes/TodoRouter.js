import Router from 'express'
import TodoController from '../controllers/TodoController.js'

const router = new Router()

router.post('/', TodoController.create)
router.get('/', TodoController.getAll)
router.delete('/:id', TodoController.delete)
router.get('/:id', TodoController.getOne)
router.put('/:id', TodoController.update)
router.get('/search', TodoController.searchTodo)

export default router;