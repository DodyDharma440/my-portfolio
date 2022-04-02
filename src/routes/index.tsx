import { Routes, Route } from "react-router-dom";
import { PageLayout } from "modules/layout/components";
import { Home } from "pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<div>About page</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
