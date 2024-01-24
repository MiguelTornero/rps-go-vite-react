import { connectURL } from "@/backend"
import Conditional from "@/components/conditional"
import { Box, Button, Container, Grid, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner } from "@chakra-ui/react"
import { Link, redirect, useSearchParams } from "react-router-dom"
import useWebSocket from "react-use-websocket"

export default function  Game() {
    const [params] = useSearchParams()
    const url = connectURL + "?" + params.toString()
    const {readyState, lastMessage} = useWebSocket(url)
    return <>
    <Modal isOpen={readyState == WebSocket.CLOSED} onClose={() => redirect("/")}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Connection closed</ModalHeader>
            <ModalBody>Make sure you have to correct connection code</ModalBody>
            <ModalFooter>
                <Link to={"/"}><Button>Return</Button></Link>
            </ModalFooter>
        </ModalContent>
    </Modal>
    <Conditional show={readyState != WebSocket.OPEN}>
        <Box position={"fixed"} top={0} bottom={0} left={0} right={0} bg={"blackAlpha.500"}>
            <Grid placeItems={"center"} h={"100vh"}>
                <Spinner color="gray.300"/>
            </Grid>
        </Box>
    </Conditional>
    <Container maxW={"container.xl"}>
        Connect code: {params.get("gameId")}
        {typeof lastMessage?.data}
    </Container>
    </>
}