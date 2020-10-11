import { keyboard, makeBehavior } from 'r2d';
import { useFrame } from 'react-three-fiber';

export const usePlayerMovement = makeBehavior(
  ({ body, mesh }, { speed = 10 }: { speed?: number } = {}) => {
    useFrame(() => {
      if (!body) return;

      const velocity = body?.getLinearVelocity();

      if (keyboard.getKey('ArrowUp')) {
        velocity.y = speed;
      } else if (keyboard.getKey('ArrowDown')) {
        velocity.y = -speed;
      } else {
        velocity.y = 0;
      }
      if (keyboard.getKey('ArrowLeft')) {
        velocity.x = -speed;
      } else if (keyboard.getKey('ArrowRight')) {
        velocity.x = speed;
      } else {
        velocity.x = 0;
      }

      body.setLinearVelocity(velocity);
    });
  },
);
