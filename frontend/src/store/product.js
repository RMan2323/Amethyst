import { create } from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async(newProduct) => {
        if(!newProduct.name || !newProduct.price) {
            return {success: false, message: "Please fill in the name and price"}
        }
        const res = await fetch("/products", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newProduct)
        })
        const prodData = await res.json();
        set((state) => ({products:[...state.products, prodData.data]}));
        return {success: true, message: "Product created successfully"}
    }
}))