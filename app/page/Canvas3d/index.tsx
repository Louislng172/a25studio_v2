"use client"
import React, { useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import s from './style.module.css'

import * as THREE from 'three'
function MyOrthographicCamera() {
  const {  size, set } = useThree()
  
  useEffect(() => {


    const aspect = size.width / size.height
    const frustumSize = size.height

    // Camera cần là một OrthographicCamera
    const orthoCam = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000
    )

    set({ camera: orthoCam }) // Thiết lập camera mới
    orthoCam.position.set(0, 0, 1) // Vị trí camera
    orthoCam.lookAt(0, 0, 0)
    orthoCam.updateProjectionMatrix()
  }, [])


  return null
}


export default function Canvas3d() {
  const [size, setSize] = useState({ x: 0, y: 0 , top: 0, left: 0 });

  useEffect(() => {
    const trackDom1 = document.getElementById("track1");
    if (!trackDom1) return;
    const rect = trackDom1.getBoundingClientRect();
   
    // Lấy kích thước của DOM
    setSize({
      x: rect.width,
      y: rect.height,
      top:trackDom1.offsetTop,
      left:trackDom1.offsetLeft
    });
 
  }, []);

  useEffect(() => {
    console.log(size)
  },[size])

  return (
    <div className={s.canvas3d}>
    
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <MyOrthographicCamera />
        <axesHelper args={[500]}/>
        {size.x > 0 && size.y > 0 && size.top > 0 && (
          <mesh visible={true} position={[-100,0  ,0]}>
            <planeGeometry args={[size.x, size.y]} />
            <meshBasicMaterial color={'blue'} />
          </mesh>
        )}
      </Canvas>
    </div>
  );
}