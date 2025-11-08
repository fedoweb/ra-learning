import { useState } from 'react';

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count => count + 1)}> + </button>
      <button onClick={() => setCount(count => count - 1)}> - </button>
    </div>
  );
}