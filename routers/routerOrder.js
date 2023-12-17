import { Router } from "express"
const router = new Router

import {getAllOrders, getOrder, createOrder, deleteOrder, updateOrder, createOrderFromCollections} from '../controller/controllers.js'

router.get("/order", getAllOrders)
router.get("/order/:id", getOrder)
router.post("/order", createOrder)
router.delete("/order/:id", deleteOrder)
router.put("/order/:id", updateOrder)

router.post("/orderCreate", createOrderFromCollections)

export default router