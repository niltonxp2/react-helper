import { lazy, FC } from 'react';

import paths from './paths';

const App = lazy(() => import('../pages/App'));
const ReactHooksRoutes = lazy(() => import('../pages/EpicReact/routes'));
const ReactDocsRoutes = lazy(() => import('../pages/ReactDocs/routes'));

export interface IRoute {
  key: string;
  path: string;
  element: FC;
}

export const routes: IRoute[] = [
  {
    key: 'root',
    path: paths.root,
    element: App,
  },
  {
    key: 'reactHooks',
    path: `${paths.reactHooks}/*`,
    element: ReactHooksRoutes,
  },
  {
    key: 'reactDocs',
    path: `${paths.reactDocs}/*`,
    element: ReactDocsRoutes,
  },
];
