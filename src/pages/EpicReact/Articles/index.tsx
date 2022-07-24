import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <>
      Articles
      <ul>
        <li>
          <Link to="reacts-key-prop">Understanding React Key Prop</Link>
        </li>
        <li>
          <Link to="what-is-jsx">What is JSX (*)</Link>
        </li>
        <li>
          <Link to="colocation">Colocation</Link>
        </li>
        <li>
          <Link to="context-api-counter">
            How to use React Context effectively
          </Link>
        </li>
        <li>
          <Link to="performance">Memo, useCallback and useMemo</Link>
        </li>
      </ul>
      <article style={{ margin: 50 }}>
        <Outlet />
      </article>
    </>
  );
};

export { Articles };
