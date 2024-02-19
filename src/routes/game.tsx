import { connectURL } from "@/backend"
import Conditional from "@/components/conditional"
import MoveButton from "@/components/move_button"
import { Box, Button, Container, Flex, Grid, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link, redirect, useSearchParams } from "react-router-dom"
import useWebSocket from "react-use-websocket"

export default function  Game() {
    const [disabled, setDisabled] = useState(false)
    const [params] = useSearchParams()
    const url = connectURL + "?" + params.toString()
    const [errMsg, setErrMsg] = useState("")
    const [msgLog, setMsgLog] = useState<string[]>(["test"])
    const {readyState, sendMessage} = useWebSocket(url, {onMessage: (e) => {
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
    <Box bgGradient={"linear(to-t, gray.50, gray.500)"}>
    <Container maxW={"container.md"} bgGradient={"linear(to-tr, blue.50, cyan.500)"}>
        <Flex flexFlow={"column"} height={"100vh"}>
            <Box flexGrow={1} flexShrink={1} overflow={"auto"} background={"blackAlpha.200"}>
                <Text fontWeight={"bold"}>Connect code: {params.get("gameId")}</Text>
                {msgLog.map((v, i) => <Text key={i} >{v}</Text>)}
            </Box>
            <Box>
                <Flex justifyContent={"space-around"} >
                    <MoveButton disabled={readyState != WebSocket.OPEN || disabled} onClick={() => {sendMessage("r") ; setDisabled(true)}} heigth={120} variant="rock"/>
                    <MoveButton disabled={readyState != WebSocket.OPEN || disabled} onClick={() => {sendMessage("p") ; setDisabled(true)}} heigth={120} variant="paper"/>
                    <MoveButton disabled={readyState != WebSocket.OPEN || disabled} onClick={() => {sendMessage("s") ; setDisabled(true)}} heigth={120} variant="scissors"/>
                </Flex>
            </Box>
        </Flex>
    </Container>
    </Box>
    </>
}