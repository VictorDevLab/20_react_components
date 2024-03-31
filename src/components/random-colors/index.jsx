import { useState } from "react"


export default function RandomColor() {
    const [typeOf, setTypeOf] = useState("hex")
    const [color, setColor] = useState("#000")
    return (
        <div style={{
            width: "100vw",
            height: "50vh",
            background: color
        }}>
            <button>Random RGB</button>
            <button>Random Hex</button>
            <button>Generate Random Color</button>
        </div>
    )
}