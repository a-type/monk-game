import * as React from 'react';
import { Box } from '@react-three/drei';
import * as pl from 'planck-js';
import { useBindings } from 'r2d';
import { usePlayerMovement } from '../behaviors/input/usePlayerMovement';

const SIZE = 1;
const SPEED = 10;

export type ProtagonistProps = {
  position: [number, number];
};

export function Protagonist({ position }: ProtagonistProps) {
  const bindings = useBindings({
    body: {
      type: 'dynamic',
    },
    fixture: {
      shape: pl.Box(SIZE / 2, SIZE / 2),
      density: 1,
    },
    position,
  });

  usePlayerMovement(bindings, { speed: SPEED });

  return (
    <Box args={[SIZE, SIZE, SIZE]} ref={bindings.setMesh}>
      <meshBasicMaterial color="blue" attach="material" />
    </Box>
  );
}
