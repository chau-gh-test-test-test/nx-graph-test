import NxWelcome from './nx-welcome';
import { Button } from '@nx-graph-test/button';
import { Input } from '@nx-graph-test/input';

export function App() {
  return (
    <div>
      <NxWelcome title="web" />
      <Button />
      <Input />
    </div>
  );
}

export default App;
