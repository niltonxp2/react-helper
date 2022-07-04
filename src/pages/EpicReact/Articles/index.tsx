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
          <Link to="what-is-jsx">What is JSX</Link>
        </li>
      </ul>
      <article>
        <Outlet />
      </article>
    </>
  );
};

export { Articles };
