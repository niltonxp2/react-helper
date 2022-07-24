import { Link, Outlet } from 'react-router-dom';

export const New = () => {
  return (
    <>
      Articles
      <ul>
        <li>
          <Link to="reducer-and-context">
            Scaling Up with Reducer and Context
          </Link>
        </li>
      </ul>
      <article>
        <Outlet />
      </article>
    </>
  );
};
