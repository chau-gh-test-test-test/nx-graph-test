import { z } from 'zod';

const schema = z.object({ hi: z.string() });

export function Icon() {
  console.log(schema);

  return (
    <div className="text-pink-500">
      <h1>Welcome to Icon!</h1>
    </div>
  );
}

export default Icon;
