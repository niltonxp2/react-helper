import { CountProvider, useCount } from './count-context';

function CountDisplay() {
  const { state } = useCount();
  return <div>{`The current count is ${state.count}`}</div>;
}

function Counter() {
  const { dispatch } = useCount();
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      Increment count
    </button>
  );
}

export function ContextApiEffectively() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}
