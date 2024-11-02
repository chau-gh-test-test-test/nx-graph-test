import NxWelcome from './nx-welcome';
import { Tooltip } from '@nx-graph-test/tooltip';
import { Input } from '@nx-graph-test/input';

export function App() {
  return (
    <div>
      <NxWelcome title="client" />
      <Tooltip />
      <Input />
    </div>
  );
}

export default App;
