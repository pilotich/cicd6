import { Router } from "express"
const router = new Router

import {getAllItems, getItem, createItem, deleteItem, updateItem} from '../controller/controllers.js'

router.get("/item", getAllItems)
router.get("/item/:id", getItem)
router.post("/item", createItem)
router.delete("/item/:id", deleteItem)
router.put("/item/:id", updateItem)

export default router