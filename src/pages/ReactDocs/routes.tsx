import { Route, Routes } from 'react-router-dom';
import { ReactDocs } from '.';
import { New } from './New';
import { ReducerAndContext } from './New/scaling-up-with-reducer-context';

const ReactHooksRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<ReactDocs />}>
        <Route path="new/*" element={<New />}>
          <Route path="reducer-and-context" element={<ReducerAndContext />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ReactHooksRoutes;
