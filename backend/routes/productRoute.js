import express, { Router } from "express";
import Product from'../models/productModel.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get("/", async(res,res)=>{
    try{
        const products = await Product.findh{});
        return res.status(200).json( {
            success: true,
            data: products
        });
    } catch(error){
        console.error("Error in getting products:", error.message);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

router.post("/", async(req,res)=>{
    const product = req.body; //user sends
    if (!product.name || !product.price){
        return res.status(400).json({
            success: false,
            message: "Please provide name and price"
        });
    }

    const newProduct = new Product(product); 

    try{
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        })
    } catch(error){
        console.error("Error in create product:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

router.put("/:id", async(req,res)=>{
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success: false,
            message: "Product not found"
        });
    }

    try{
        const updatedProd = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({
            success: true,
            data: updatedProd
        });
    } catch(error){
        console.error("Put failed:",error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

router.delete("/:id", async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success: false,
            message: "Product not found"
        });
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json( {
            success: true,
            message: "Deleted"
        });
    } catch(error){
        console.error("Delete failed:",error.message);
        res.status(500).json( {
            success: false,
            message: "Server Error"
        });
    }
});

export default router;