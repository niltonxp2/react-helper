/* eslint-disable no-console */

import React from 'react';
import { Link } from 'react-router-dom';

interface ICountButton {
  onClick: () => void;
  count: number;
  id: number;
}

const CountButton = React.memo(function CountButton({
  onClick,
  count,
  id,
}: ICountButton) {
  console.log('render id: ', id, 'counter -> ', count);

  return <button onClick={onClick}>{count}</button>;
});

export function MemoDualCounter() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = React.useCallback(() => setCount1(c => c + 1), []);

  const [count2, setCount2] = React.useState(0);
  const increment2 = React.useCallback(() => setCount2(c => c + 1), []);

  return (
    <>
      <CountButton count={count1} onClick={increment1} id={1} />
      <CountButton count={count2} onClick={increment2} id={2} />
      <Link to="performance">Back</Link>
    </>
  );
}

/* Every click will re-render both CountButton

function CountButton({onClick, count}) {
  return <button onClick={onClick}>{count}</button>
}

function DualCounter() {
  const [count1, setCount1] = React.useState(0)
  const increment1 = () => setCount1(c => c + 1)

  const [count2, setCount2] = React.useState(0)
  const increment2 = () => setCount2(c => c + 1)

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  )
}

*/
