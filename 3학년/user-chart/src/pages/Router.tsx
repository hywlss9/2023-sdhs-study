import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Bar from './Bar';
import Pie from './Pie';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Bar />} />
        <Route path='/pie' element={<Pie />} />
      </Routes>
    </BrowserRouter>
  );
}
