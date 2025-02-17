import React, { useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useDispatch, useSelector } from 'react-redux';

import Glb1 from './Glb1'

const RoomGlb = () => {
  const roomColor = useSelector((state) => state.users.room_color);
  const [roomGLB, setRoomGLB] = useState('./glb/room/room_green.glb')
  useEffect(() => {
    if(roomColor ==0){
      setRoomGLB('/glb/room/room_green.glb')
    }
    else if(roomColor == 1){
      setRoomGLB('/glb/room/room_blue.glb')
    }
    else if(roomColor == 2){
      setRoomGLB('/glb/room/room_pink.glb')
    }
    else if(roomColor == 3){
      setRoomGLB('/glb/room/room_white.glb')
    }
    else if(roomColor == 4){
      setRoomGLB('/glb/room/room_wood.glb')
    }
  }, [roomColor])

  const gltf = useLoader(GLTFLoader, roomGLB);
  
  const dispatch = useDispatch();
  const furnitureList = useSelector(state => state.furniture.furnitureList);

  return (
    <group>
      <mesh 
        castShadow
        receiveShadow
      >
        <primitive object={gltf.scene} position={[0, 0, 0]} />
      </mesh>
      <pointLight
        intensity={2}
        width={0.1}
        height={0.1}
        position={[5, 0, 0]}
        lookAt={[0, 0, 0]}
        shadow-bias={-0.001} // 그림자의 외곽 선명도를 높입니다.
      />
      <directionalLight
        position={[10, 50, 10]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024} // 그림자 맵의 너비를 높입니다.
        shadow-mapSize-height={1024} // 그림자 맵의 높이를 높입니다.
        shadow-camera-near={0.1} // 그림자 카메라의 가까운 면을 높입니다.
        shadow-camera-far={150} // 그림자 카메라의 먼 면을 높입니다.
      />
    </group>
  );
};

export default RoomGlb;
