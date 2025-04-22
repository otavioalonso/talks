import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, useTexture } from '@react-three/drei';
import '../styles/World.scss'
function Character() {
  return (
    <mesh position={[0, 0.25, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Floor() {
  const texture = useTexture('/sprites/map.png'); // Replace with a valid texture path

  return (
    <Plane
      args={[30, 30]}
      rotation-x={-Math.PI / 2}
    >
      <meshStandardMaterial attach="material" map={texture} />
    </Plane>
  );
}

function Game() {
  const [position, setPosition] = useState([0, 0.5, 0]);

  const handleKeyDown = (event) => {
    setPosition(prevPosition => {
      switch (event.key) {
        case 'ArrowUp':
          return [prevPosition[0], prevPosition[1], prevPosition[2] - 0.5];
        case 'ArrowDown':
          return [prevPosition[0], prevPosition[1], prevPosition[2] + 0.5];
        case 'ArrowLeft':
          return [prevPosition[0] - 0.5, prevPosition[1], prevPosition[2]];
        case 'ArrowRight':
          return [prevPosition[0] + 0.5, prevPosition[1], prevPosition[2]];
        default:
          return prevPosition;
      }
    });
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} style={{ height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[1, 10, 10]} />
        <Character position={position} />
        <Floor />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function World() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default World;