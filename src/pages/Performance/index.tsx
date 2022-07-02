import { Link } from 'react-router-dom';
import paths from '../../routes/paths';

const index = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to={paths.useCallbackUseMemo}>
        When to use useMemo and useCallback
      </Link>
      <Link to={paths.memo}>When to use Memo</Link>

      <p>So when should I useMemo and useCallback?</p>
      <p>
        There are specific reasons both of these hooks are built-into React:
      </p>

      <li>Referential equality</li>
      <li>Computationally expensive calculations</li>
    </div>
  );
};

export default index;
