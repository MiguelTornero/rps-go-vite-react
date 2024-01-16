import Conditional from "@/components/conditional"
import { Box, Container, Grid, Spinner } from "@chakra-ui/react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function  Game() {
    const [params] = useSearchParams()
    const [isLoading] = useState(true)


    const gameId = params.get("gameId") || ""

    return <>
    <Conditional show={isLoading}>
        <Box position={"fixed"} top={0} bottom={0} left={0} right={0} bg={"blackAlpha.500"}>
            <Grid placeItems={"center"} h={"100vh"}>
                <Spinner color="gray.300"/>
            </Grid>
        </Box>
    </Conditional>
    <Container maxW={"container.xl"}>
        id: {gameId} <br/>
        backend: {(new URL(import.meta.env.VITE_BACKEND_BASE + "")).toString()}
    </Container>
    </>
}