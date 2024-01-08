import { Container, GridItem, SimpleGrid } from "@chakra-ui/react"

function App() {

  return (
    
    <Container maxW="container.lg">
      <SimpleGrid columns={{"base": 1, "md": 2}}>
        <GridItem rowSpan={{"base": 1, "md": 2}} bg={"red"}>1</GridItem>
        <GridItem bg={"green"}>2</GridItem>
        <GridItem bg={"blue"}>3</GridItem>
      </SimpleGrid>
    </Container>
  )
}

export default App
