import NxWelcome from './nx-welcome';
import { Tooltip } from '@nx-graph-test/tooltip';

export function App() {
  return (
    <div>
      <NxWelcome title="client" />
      <Tooltip />
    </div>
  );
}

export default App;
