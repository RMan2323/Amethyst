import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    }
}, {
    timestamps: true  //createdAt, updatedAt fields added
});

const Product = mongoose.model('Product', productSchema);  //const <varName> = mongoose.model(<modelName>, <schema>);

export default Product;