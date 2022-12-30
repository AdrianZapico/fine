import React from "react";
import { GranBox, Image, Top, Father, BtnMusic } from "./Styles";
import stone from "../../assets/images/stoneface.png"
import { useState } from "react";
import audioStone from "../../assets/audios/stoneface.mp3"


export default function StoneFace() {

    const [toggle, setToggle] = useState(false)
    const audio = new Audio(audioStone)

    

    return (
        <>
        <Father>
            <Top onClick={() => setToggle(!toggle)}>
                  <BtnMusic onClick={() => {audio.play() }} >🍷</BtnMusic>
            </Top>
            {toggle &&
                <GranBox>

                    <Image src={stone}></Image>

                </GranBox>
            }
                </Father>
        </>
    )
}