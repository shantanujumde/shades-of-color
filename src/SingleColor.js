import { useState } from "react"
import "./SingleColor.css"

const SingleColor = ({ rgb, weight, index, hexVal, length }) => {
    const bcg = rgb.join(",")
    const [clipboard, setClipboard] = useState(false)

    return (
        <article className="col-sm-3 col-md-2 p-5 " style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                setClipboard(true)
                navigator.clipboard.writeText("#" + hexVal)
                setTimeout(() => {
                    setClipboard(false)
                }, 3000)
            }}
        >
            <div className={`color-values  ${index > Math.floor(length / 2) ? 'text-light' : 'text-dark'}`}>
                <p className="">{weight}% </p>
                <p >#{hexVal}</p>
                {clipboard ? <p className="text-sm-center">coiped to clipboard</p> : ""}
            </div>
        </article>
    )
}
export default SingleColor