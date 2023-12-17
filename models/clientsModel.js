import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    clientName: { type: String, require: true },
    clientOrdersNum: { type: Number, require: true },
    clientPoint: { type: String, require: true },
},
{
    timestamps: true,
});

export default mongoose.model('Client', clientSchema);