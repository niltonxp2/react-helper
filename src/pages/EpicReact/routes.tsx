import { Route, Routes } from 'react-router-dom';
import { EpicReact } from '.';
import { Articles } from './Articles';
import { Colocation } from './Articles/colocation';
import { ReactKey } from './Articles/understanding-react-key-prop';
import { WhatIsJsx } from './Articles/what-is-jsx';
import { Hooks } from './ReactHooks';
import { HookFlow } from './ReactHooks/hook-flow';

const ReactHooksRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<EpicReact />}>
        <Route path="hooks/*" element={<Hooks />}>
          <Route path="hook-flow" element={<HookFlow />} />
        </Route>
        <Route path="articles/*" element={<Articles />}>
          <Route path="reacts-key-prop" element={<ReactKey />} />
          <Route path="what-is-jsx" element={<WhatIsJsx />} />
          <Route path="colocation" element={<Colocation />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ReactHooksRoutes;