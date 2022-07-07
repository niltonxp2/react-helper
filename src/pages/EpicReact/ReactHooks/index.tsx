import { Link, Outlet } from 'react-router-dom';

const Hooks = () => {
  return (
    <>
      Hooks
      <ul>
        <li>
          <Link to="hook-flow">Hook Flow</Link>
        </li>
      </ul>
      <article>
        <Outlet />
      </article>
    </>
  );
};

export { Hooks };
