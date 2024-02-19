import { Button, Image } from "@chakra-ui/react";
import rock from "@/assets/rock.svg";
import paper from "@/assets/paper.svg";
import scissors from "@/assets/scissors.svg";
import { MouseEventHandler } from "react";

type Move = "rock" | "paper" | "scissors"

type MoveButtonProps = {
    variant: Move,
    heigth?: number,
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const images = {
    "rock": rock,
    "paper": paper,
    "scissors": scissors
}

export default function MoveButton({variant, disabled, heigth = 100, onClick} : MoveButtonProps) {
    return <Button onClick={onClick} isDisabled={disabled} colorScheme="cyan" padding={"1rem"} height={heigth} width={heigth}><Image height={"100%"} src={images[variant]}/></Button>
}