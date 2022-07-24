import { Route, Routes } from 'react-router-dom';
import { EpicReact } from '.';
import { Articles } from './Articles';
import { Colocation } from './Articles/colocation';
import { ContextApiEffectively } from './Articles/context-api-effectively';
import { Performance } from './Articles/Performance';
import { MemoDualCounter } from './Articles/Performance/Memo';
import { UseCallbackUseMemo } from './Articles/Performance/UseCallback-UseMemo';
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
          <Route
            path="context-api-counter"
            element={<ContextApiEffectively />}
          />
          <Route path="performance/*" element={<Performance />}>
            <Route path="memo" element={<MemoDualCounter />} />
            <Route
              path="useCallback-useMemo"
              element={<UseCallbackUseMemo />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default ReactHooksRoutes;
