import { Link, Outlet } from 'react-router-dom';

export const ReactDocs = () => {
  return (
    <div>
      React Docs Articles
      <p style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to="new">New</Link>
      </p>
      <Outlet />
    </div>
  );
};
