import express from "express"
import protectRoute from '../middleware/protectRoute.js'

import {getAllItem , getItem , createItem , updateItem , deleteItem } from '../controllers/item.controller.js'

const router = express.Router()

router.post('/' , getAllItem )
router.post('/create' ,createItem )
router.put('/update' ,updateItem )
router.delete('/delete' ,deleteItem )
router.post('/:id' ,getItem )

export default router