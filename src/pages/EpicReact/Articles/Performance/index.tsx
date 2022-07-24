import { Link, Outlet } from 'react-router-dom';

export const Performance = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="useCallback-useMemo">When to use useMemo and useCallback</Link>
      <Link to="memo">When to use Memo</Link>

      <p>So when should I useMemo and useCallback?</p>
      <p>
        There are specific reasons both of these hooks are built-into React:
      </p>

      <p>
        <li>Referential equality</li>
        <li>Computationally expensive calculations</li>
      </p>

      <article style={{ margin: 100 }}>
        <Outlet />
      </article>
    </div>
  );
};
