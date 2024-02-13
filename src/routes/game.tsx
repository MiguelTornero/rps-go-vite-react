import { connectURL } from "@/backend"
import Conditional from "@/components/conditional"
import { Box, Button, Container, Grid, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, redirect, useSearchParams } from "react-router-dom"
import useWebSocket from "react-use-websocket"

export default function  Game() {
    const [params] = useSearchParams()
    const url = connectURL + "?" + params.toString()
    const [errMsg, setErrMsg] = useState("")
    const [msgLog, setMsgLog] = useState<string[]>([])
    const {readyState} = useWebSocket(url, {onMessage: (e) => {
        if (typeof e.data != "string") {return}
        const msg = e.data
        setMsgLog((prev) => {
            return prev.concat(msg)
        })
    }, onClose: (e) => setErrMsg(e.reason)})
    return <>
    <Modal isOpen={false && !!errMsg} onClose={() => redirect("/")}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Connection closed</ModalHeader>
            <ModalBody>Reason: {errMsg}</ModalBody>
            <ModalFooter>
                <Link to={"/"}><Button>Return</Button></Link>
            </ModalFooter>
        </ModalContent>
    </Modal>
    <Conditional show={false && readyState != WebSocket.OPEN}>
        <Box position={"fixed"} top={0} bottom={0} left={0} right={0} bg={"blackAlpha.500"}>
            <Grid placeItems={"center"} h={"100vh"}>
                <Spinner color="gray.300"/>
            </Grid>
        </Box>
    </Conditional>
    <Container maxW={"container.md"} height={"100vh"}>
        <Box height={"80%"}>
        Connect code: {params.get("gameId")}
        {msgLog.map((v, i) => <Text key={i} >{v}</Text>)}
        </Box>
        <Box height={"20%"}>A</Box>
    </Container>
    </>
}