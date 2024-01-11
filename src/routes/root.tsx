import { Box, Button, Container, Flex, GridItem, Heading, IconButton, Image, Input, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons"

import logo from "@/assets/logo.svg"
import github_logo from "@/assets/github_logo.svg"

const NavBar = () => (
<Container maxWidth={"container.xl"}>
<Flex padding={4} gap={4} alignItems={"center"} backdropFilter={"blur(20px)"}>
    <Link to="/">
        <Text fontSize={"1.5rem"} fontWeight={"bold"}>RSP Go!</Text>
    </Link>
    <Spacer/>
    <Link to="#">About</Link>
    <Link to="https://github.com/MiguelTornero/rps-go-vite-react">
        <Image src={github_logo} height={"30px"}/>
    </Link>
</Flex>
</Container>
)

export default function Root() {
    return <>
    <Box bgGradient={"linear(to-tr, blue.50, cyan.500)"}>
        <NavBar/>
        <Container maxW="container.lg" paddingBottom={4}>
        <SimpleGrid columns={{"base": 1, "md": 2}} gap={4}>
            <GridItem rowSpan={{"base": 1, "md": 2}}>
                <Image src={logo} boxSize={"200px"} mx={"auto"} my={"1rem"}/>
                <Heading as={"h1"} fontSize={"4xl"} textAlign={"center"}>Rock, Paper, Scissors, Go!</Heading>
                <Text fontSize={"xl"}>Play Rock-Paper-Scissors with your friends, no matter where you are!</Text>
            </GridItem>
            <GridItem>
                <Form method="GET" action="/join_game">
                    <Box>
                    <Stack spacing={4} bg={"white"} padding={4} borderRadius={4}>
                        <Text as={"h2"} fontSize={"2xl"} textAlign={"center"} fontWeight={"bold"} my={2}>Connect to a game</Text>
                        <Input name="gameId" required placeholder="Code"/>
                        <Button colorScheme="blue" variant={"solid"} type="submit">Connect</Button>
                    </Stack>
                    </Box>
                </Form>
            </GridItem>
            <GridItem>
                <Stack spacing={4} bg={"white"} padding={4} borderRadius={4} alignItems={"center"}>
                <Text as={"h2"} fontSize={"2xl"} textAlign={"center"} fontWeight={"bold"} my={2}>Create game</Text>
                    <Link to="/create_game">
                        <IconButton mx={"auto"} boxSize={"100px"} icon={<AddIcon boxSize={"50px"}/>} aria-label="Create a lobby" colorScheme="blue"/>
                    </Link>
                </Stack>
            </GridItem>
        </SimpleGrid>
        </Container>
    </Box>
    <Container  maxW="container.lg">
        footer
    </Container>
    </>
}