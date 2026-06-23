import { Container, Flex, Text, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { useTheme } from 'next-themes'
import { set } from "mongoose";

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    return <Container maxW={"1140px"} px={4}>
        <Flex
            h={"16"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}>
            <Text
                fontSize={{ base: "22px", sm: "28px" }}
                fontWeight={"bold"}
                textAlign={"center"}>
                <Link to={"/"}>Product Store</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        +
                    </Button>
                </Link>
                <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    {theme === "light" ? "🌙" : "☀️"}
                </Button>
            </HStack>

        </Flex>
    </Container>
};

export default Navbar;