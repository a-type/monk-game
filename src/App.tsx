import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from 'react-three-fiber';
import { Protagonist } from './characters/Protagonist';
import { OrthographicCamera } from '@react-three/drei';
import { Physics } from 'r2d';
import { Vec2 } from 'planck-js';

function App() {
  return (
    <Canvas>
      <Physics config={{ gravity: Vec2(0,0)}}>
        <Protagonist position={[0,0]} />
        <OrthographicCamera makeDefault zoom={10} position={[0,0,10]}>{null}</OrthographicCamera>
      </Physics>
    </Canvas>
  );
}

export default App;
