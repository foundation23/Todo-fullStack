import Router from 'express'
const router = new Router()

import ListRouter from './ListRouter.js'
import TodoRouter from './TodoRouter.js'

router.use('/todo', TodoRouter)
router.use('/list', ListRouter)

export default router;