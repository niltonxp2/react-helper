// https://kentcdodds.com/blog/usememo-and-usecallback

/* eslint-disable no-console */

import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../routes/paths';

interface IFoo {
  bar: () => void;
  baz: Array<number>;
}

function Foo({ bar, baz }: IFoo) {
  React.useEffect(() => {
    const options = { bar, baz };
    console.log('options changed', options);
  }, [bar, baz]);

  return <div>foobar</div>;
}

export default function Blub() {
  const bar = React.useCallback(() => {
    // intentional
  }, []);
  const baz = React.useMemo(() => [1, 2, 3], []);
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <button onClick={() => setCounter(c => c + 1)}>+</button>
      <p>{counter}</p>
      <Foo bar={bar} baz={baz} />
      <Link to={paths.performance}>Back</Link>
    </>
  );
}
