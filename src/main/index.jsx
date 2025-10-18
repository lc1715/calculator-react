import { useState } from "react"
import Display from "./Display"

export default function Main() {
    const [displayNumber, setDisplayNumber] = useState(25)

    return (
        <div style={{ height: 300 }}>
            <Display displayNumber={displayNumber} />
        </div>
    )
}