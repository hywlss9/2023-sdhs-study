import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Main';
import Cats from './Cats';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cats' element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}
