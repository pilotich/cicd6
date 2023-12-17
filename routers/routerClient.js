import { Router } from "express"
const router = new Router

import {getAllClients, getClient, createClient, deleteClient, updateClient} from '../controller/controllers.js'

router.get("/client", getAllClients) 
router.get("/client/:id", getClient)
router.post("/client", createClient)
router.delete("/client/:id", deleteClient)
router.put("/client/:id", updateClient)

export default router