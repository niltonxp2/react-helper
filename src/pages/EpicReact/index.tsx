import { Link, Outlet } from 'react-router-dom';

export const EpicReact = () => {
  return (
    <div>
      Epic react
      <p style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to="hooks">Hooks</Link>
        <Link to="articles">Articles</Link>
      </p>
      <Outlet />
    </div>
  );
};
