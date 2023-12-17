import { Router } from "express"
const router = new Router

import * as controller from '../controller/controllers.js'

router.get("/client", controller.getAllClients) 
router.get("/client/:id", controller.getClient)
router.post("/client", controller.createClient)
router.delete("/client/:id", controller.deleteClient)
router.put("/client/:id", controller.updateClient)

router.get("/item", controller.getAllItems)
router.get("/item/:id", controller.getItem)
router.post("/item", controller.createItem)
router.delete("/item/:id", controller.deleteItem)
router.put("/item/:id", controller.updateItem)

router.get("/order", controller.getAllOrders)
router.get("/order/:id", controller.getOrder)
router.post("/order", controller.createOrder)
router.delete("/order/:id", controller.deleteOrder)
router.put("/order/:id", controller.updateOrder)

router.post("/orderCreate", controller.createOrderFromCollections)

export default router
