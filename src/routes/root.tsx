import { Box, Container, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Root() {
    return (
    <Box bgGradient={"linear(to-tr, blue.100, cyan.400)"}>
    <Container maxW="container.lg">
      <SimpleGrid columns={{"base": 1, "md": 2}}>
        <GridItem rowSpan={{"base": 1, "md": 2}}>
            <Heading fontSize={"6xl"} textAlign={"center"}>RPS Go!</Heading>
            <Text fontSize={"xl"}>Play Rock-Papers-Scissors with your friends, no matter where you are!</Text>
        </GridItem>
        <GridItem bg={"green"}>2</GridItem>
        <GridItem bg={"blue"}>3</GridItem>
      </SimpleGrid>
    </Container>
    </Box>
    )
}