import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "common/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<div>About page</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
