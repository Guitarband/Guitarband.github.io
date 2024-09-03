import * as THREE from 'three'
import {Canvas, useLoader, useFrame} from '@react-three/fiber'
import {MeshReflectorMaterial, OrbitControls} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useState} from "react";
import {usePageContext} from "./PageContext.jsx";

export default function App() {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const handleMouseClick = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    useEffect(() => {
        window.addEventListener('click', handleMouseClick)
        return () => {
            window.removeEventListener('click', handleMouseClick)
        }
    })


    return (
        <div id="canvas-container">
            <Canvas style={{background:"skyblue"}} camera={{position: [16,6,0], fov: 15}}>
                <OrbitControls/>
                <ambientLight intensity={0.1} />
                <directionalLight color={"white"} position={[5, 4, 3]} />
                <Models raycaster={raycaster} mouse={mouse} />
            </Canvas>
        </div>
    )
}

function Models({raycaster, mouse}) {
    const {value, setValue} = usePageContext()

    const models = useLoader(GLTFLoader, '/models.glb')
    let camera = undefined
    models.scene.traverse((child) => {
        if (child instanceof THREE.Light) {
            child.intensity = 200 // Decrease the light intensity of the imported model
        }
        if (child instanceof THREE.Camera) {
            camera = child // Set the camera retrieved from the model
        }
    })

    useFrame(() => {
        if(mouse.x !== null && mouse.y !== null) {
            raycaster.setFromCamera(mouse, camera)
            const intersects = raycaster.intersectObjects(models.scene.children, true)
            if (intersects.length > 0) {
                if (intersects[0].object.name === 'Crystal_Top' || intersects[0].object.name === 'Crystal_Inner' || intersects[0].object.name === 'Crystal_Walls') {
                    setValue("about")
                }
                if (intersects[0].object.name === 'Cube001' || intersects[0].object.name === 'Cube001_1' || intersects[0].object.name === 'Crystal_Walls') {
                    setValue("projects")
                }
            }
        }
    })
    return <primitive object={models.scene} scale={[1, 1, 1]}/>
}
