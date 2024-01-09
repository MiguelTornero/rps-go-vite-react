import { Box, Button, Container, Flex, GridItem, Heading, IconButton, Image, Input, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons"

import logo from "@/assets/logo.svg"
import github_logo from "@/assets/github_logo.svg"

const NavBar = () => (
<Flex padding={4} gap={4} alignItems={"center"}>
    <Link to="/">
        <Text fontSize={"1.5rem"} fontWeight={"bold"}>RSP Go!</Text>
    </Link>
    <Spacer/>
    <Link to="#">Link 1</Link>
    <Link to="#">Link 2</Link>
    <Link to="https://github.com/MiguelTornero/rps-go-vite-react">
        <Image src={github_logo} height={"30px"}/>
    </Link>
</Flex>
)

export default function Root() {
    return <>
    <Box bgGradient={"linear(to-tr, blue.100, cyan.500)"}>
        <NavBar/>
        <Container maxW="container.lg">
        <SimpleGrid columns={{"base": 1, "md": 2}}>
            <GridItem rowSpan={{"base": 1, "md": 2}}>
                <Image src={logo} boxSize={"200px"} mx={"auto"} my={"1rem"}/>
                <Heading as={"h1"} fontSize={"4xl"} textAlign={"center"}>Rock, Paper, Scissors, Go!</Heading>
                <Text fontSize={"xl"}>Play Rock-Paper-Scissors with your friends, no matter where you are!</Text>
            </GridItem>
            <GridItem>
                <Text as={"h2"} fontSize={"2xl"} textAlign={"center"} fontWeight={"bold"} my={2}>Connect to a game</Text>
                <Form style={{width: "100%"}} method="GET" action="/join_game">
                    <Stack spacing={4} bg={"white"} padding={4} borderRadius={4}>
                        <Input name="gameId" required placeholder="Code"/>
                        <Button colorScheme="blue" variant={"solid"} type="submit">Connect</Button>
                    </Stack>
                </Form>
            </GridItem>
            <GridItem>
                <Link to="/create_game">
                    <IconButton icon={<AddIcon/>} aria-label="Create a lobby" colorScheme="blue"/>
                </Link>
            </GridItem>
        </SimpleGrid>
        </Container>
    </Box>
    <Container  maxW="container.lg">
        footer
    </Container>
    </>
}