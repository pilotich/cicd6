import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderClientName: { type: String, require: true },
    orderDescription: { type: String, require: false },
    orderDeliverTo: {type: String, require: true},
    orderItemsList: {type: Object, require: true},
    orderPrice: {type: Number, require: true},
    orderDate: {type: Date, require: true},
    // orderStatus: {type: String, require: true},
},
{
    timestamps: true,
});

// module.exports = mongoose.model('Orders', orderSchema);
export default mongoose.model('Orders', orderSchema);