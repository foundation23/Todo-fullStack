import Router from 'express'
import ListController from "../controllers/ListController.js";

const router = new Router()

router.post('/', ListController.create)
router.get('/', ListController.getAll)
router.delete('/:id', ListController.delete)
router.get('/:id', ListController.getOne)

export default router;