import NxWelcome from './nx-welcome';
import { Button } from '@nx-graph-test/button';
import { Input } from '@nx-graph-test/input';
import { Canvas } from '@react-three/fiber';

export function App() {
  return (
    <div>
      <NxWelcome title="web" />
      <Button />
      <Input />
      <Canvas>
        <mesh />
      </Canvas>
    </div>
  );
}

export default App;
