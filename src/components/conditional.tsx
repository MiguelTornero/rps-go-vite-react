import { ReactNode } from "react"

type ConditionalProps = {
    show: boolean,
    children: ReactNode
}

export default function Conditional({show, children}: ConditionalProps) {
    if (show) {
        return children
    }
    return null
}