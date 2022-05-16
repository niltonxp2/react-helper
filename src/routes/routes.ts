import { lazy, FC } from 'react';

import paths from './paths';

const Performance = lazy(() => import('../pages/Performance'));
const UseCallbackAndUseMemo = lazy(
  () => import('../pages/Performance/UseCallback-UseMemo'),
);
const Memo = lazy(() => import('../pages/Performance/Memo'));
const App = lazy(() => import('../pages/App'));
const CountContextApi = lazy(() => import('../pages/CountContextApi'));

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
    key: 'perf',
    path: paths.performance,
    element: Performance,
  },
  {
    key: 'useCallback-useMemo',
    path: paths.useCallbackUseMemo,
    element: UseCallbackAndUseMemo,
  },
  {
    key: 'memo',
    path: paths.memo,
    element: Memo,
  },
  {
    key: 'memo',
    path: paths.context,
    element: CountContextApi,
  },
];
