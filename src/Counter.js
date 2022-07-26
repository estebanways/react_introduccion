import { useEffect, useState } from 'react';

function Counter() {

  const [count, updateCount] = useState(0);

  useEffect(() => {
    console.log('Counter Rendered!');
  })

  function onClick() {
    updateCount(count + 1);
  }

  return (
    <div>
      <p>
        Our counter is: {count}
      </p>
      <button onClick={onClick}>CLICK ME</button>
    </div>
  );
}

export default Counter;
