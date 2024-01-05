import mongoose from "mongoose";
import clientsModel from "../models/clientsModel.js"
import itemModel from "../models/itemModel.js";
import ordersModel from "../models/ordersModel.js"
import axios from "axios";


// client methods
export const createClient = async (req, res) => {
    try {
        const clientItem = new clientsModel({
            clientName: req.body.clientName,
            clientOrdersNum: req.body.clientOrdersNum,
            clientPoint: req.body.clientPoint,
        })

        const client = await clientItem.save();
        res.send({
            message: "Client has been successfuly created!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Create client!",
        });
    }
}

export const getAllClients = async (req, res) => {
    try {
        const clients = await clientsModel.find();
        res.json(clients);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Get Clinets!",
        });
    }
}

export const getClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const client = await clientsModel.findOne({ _id: clientId, },)
        res.json(client);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Get Client!",
        });
    }
}

export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const client = await clientsModel.deleteOne({ _id: clientId, },)
        res.send({
            message: "Client has been successfuly deleted!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Delete Contact!",
        });
    }
}

export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const client = await clientsModel.updateOne({ 
            _id: clientId, 
        },{
            clientName: req.body.contactName,
            clientOrdersNum: req.body.clientOrdersNum,
            clientPoint: req.body.clientPoint,
        })
        res.send({
            message: "Client has been successfuly updated!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Update Client!",
        });
    }
}


//orders methods
export const createOrder = async (req, res) => {
    try {
        const orderItem = new ordersModel({
            orderClientName: req.body.orderClientName,
            orderClientName: req.body.orderClientName,
            orderDeliverTo: req.body.orderDeliverTo,
            orderItemsList: req.body.orderItemsList,
            orderPrice: req.body.orderPrice,
            orderDate: req.body.orderDate,
        })

        const order = await orderItem.save();
        res.send({
            message: "Order has been successfuly created!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Create order!",
        });
    }
}

export const getAllOrders = async (req, res) => {
    try {
        const orders = await ordersModel.find();
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Get Orders!",
        });
    }
}

export const getOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await ordersModel.findOne({ _id: orderId, },)
        res.json(order);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Get order!",
        });
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await ordersModel.deleteOne({ _id: orderId, },)
        res.send({
            message: "Order has been successfuly deleted!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Delete order!",
        });
    }
}

export const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await ordersModel.updateOne({ 
            _id: orderId, 
        },{
            orderClientName: req.body.orderClientName,
            orderClientName: req.body.orderClientName,
            orderDeliverTo: req.body.orderDeliverTo,
            orderItemsList: req.body.orderItemsList,
            orderPrice: req.body.orderPrice,
            orderDate: req.body.orderDate,
        })
        res.send({
            message: "Order has been successfuly updated!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Update Order!",
        });
    }
}

//item methods
export const createItem = async (req, res) => {
    try {
        const newItem = new itemModel({
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemQuantity: req.body.itemQuantity,
        })

        const item = await newItem.save();
        res.send({
            message: "Item has been successfuly created!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Create Item!",
        });
    }
}

export const getAllItems = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Get Items!",
        });
    }
}

export const getItem = async (req, res) => {
    try {
        console.log("getItemRequest", req.params)
        const itemId = req.params.id;
        const item = await itemModel.findOne({ _id: itemId, },)
        res.json(item);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Get Item",
        });
    }
}

export const deleteItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await itemModel.deleteOne({ _id: itemId, },)
        res.send({
            message: "Item has been successfuly deleted!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Delete Item!",
        });
    }
}

export const updateItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await itemModel.updateOne({ 
            _id: itemId, 
        },{ 
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemQuantity: req.body.itemQuantity,
        })
        res.send({
            message: "Item has been successfuly updated!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Update Contact!",
        });
    }
}

//main method
//{"itemId": "6578b8c4f7874af069d19004", "clientId": "6577164b985807d08779b4c9"}
export const createOrderFromCollections = async(req, res) => {
    try {
        console.log(req.body)
        const item = await axios.get('http://localhost:8002/api/item/' + req.body.itemId)
        console.log(item)

        const client = await axios.get('http://localhost:8000/api/client/' + req.body.clientId)
        console.log(client)

        const orderItem = await ordersModel.create({
            orderClientName: client.data.clientName,
            orderDescription: "",
            orderDeliverTo: client.data.clientPoint,
            orderItemsList: item.data.itemName,
            orderPrice: item.data.itemPrice,
            orderDate: Date(),
        })
        const result = await ordersModel.findOne({})
        res.send({
            message: "Order has been created!"
        });
        //res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Create Order!",
        });
    }
}

