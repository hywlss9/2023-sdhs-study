import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from "./List";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
