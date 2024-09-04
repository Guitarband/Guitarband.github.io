import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {useEffect} from "react";
import {usePageContext} from "./PageContext.jsx";


export default function About(){
    const {value, setValue} = usePageContext()

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if(event.code==="Escape"){
                setValue("home")
            }
        })
        return () => {
            window.removeEventListener('keydown', (event) => {
                if(event.code==="Escape"){
                    setValue("home")
                }
            })
        }
    })

    return(
        <div id="canvas-container">
            <Canvas style={{background:"skyblue"}} camera={{position: [16,6,0], fov: 15}}>
                <OrbitControls/>
                <ambientLight intensity={0.1} />
                <directionalLight color={"white"} position={[5, 4, 3]} />
            </Canvas>
        </div>
    )
}