import { Container, Heading, VStack, Box, Input, Button } from '@chakra-ui/react';
import { Toaster, toaster } from "../components/ui/toaster"
import { useState } from 'react';
import { useTheme } from "next-themes";
import { useProductStore } from '../store/product';

const CreatePage = ()=>{

    const { resolvedTheme } = useTheme();
    const bg = resolvedTheme === "dark" ? "gray.800" : "white";

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    const { createProduct } = useProductStore()

    // const toast = useToast()
    const handleAddProduct = async() => {
        const { success, message } = await createProduct(newProduct)
        if(!success){
            toaster.create({
                title:"Error",
                "description": message,
                type: "error",
                closable: true
            })
        }
        else{
            toaster.create({
                title:"Success",
                "description": message,
                type: "success",
                closable: true
            })
        }
        setNewProduct({ name:"", price:"", image:""})
    }

    return <Container maxW={"container.sm"}>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>

            <Box
                w={"full"}
                maxW={"lg"}
                mx={"auto"}
                bg={bg}
                p={6}
                rounded={"lg"}
                shadow={"md"}>

                <VStack spacing={4}>
                    <Input
                        variant="outline"
                        colorPalette={'blue'}
                        borderColor={'blue.400'}
                        placeholder='Product Name'
                        name='name'
                        value={newProduct.name}
                        onChange={(e)=>setNewProduct({ ...newProduct, name: e.target.value })}>
                    </Input>
                    <Input
                        variant="outline"
                        colorPalette={'blue'}
                        borderColor={'blue.400'}
                        placeholder='Price'
                        name='price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e)=>setNewProduct({ ...newProduct, price: e.target.value })}>
                    </Input>
                    <Input
                        variant="outline"
                        colorPalette={'blue'}
                        borderColor={'blue.400'}
                        placeholder='Image'
                        name='image'
                        value={newProduct.image}
                        onChange={(e)=>setNewProduct({ ...newProduct, image: e.target.value })}>
                    </Input>
                    <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                        Add Product
                    </Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
};

export default CreatePage;