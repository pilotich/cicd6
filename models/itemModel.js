import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    itemName: { type: String, require: true },
    itemPrice: { type: Number, require: true },
    itemQuantity: { type: Number, require: true },
},
{
    timestamps: true,
});

export default mongoose.model('Item', itemSchema);