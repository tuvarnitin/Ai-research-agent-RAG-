import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { MeshBasicMaterial } from "three";

export default function Model(props) {
    const { nodes, materials, scene } = useGLTF("/brain.glb");
    console.log(nodes, materials, scene)
    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh && obj.material) {
                obj.material.wireframe = true;
            }
        });
    }, [scene])

    // scene.rotation.y = Math.PI/4
    // scene.rotation.x = 1.1

    useFrame(()=>{
        scene.rotation.y -= 0.002
    })
    const {viewport} = useThree()

    return (
        <primitive
            object={scene}
            scale={viewport.width /3.8}
            position={[0, -2.5, 0]}
            {...props}
        />
    );
}

// optional but recommended

useGLTF.preload("/models/scene.glb");