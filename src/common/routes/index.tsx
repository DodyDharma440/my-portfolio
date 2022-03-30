import { Routes, Route } from "react-router-dom";
import { Layout } from "common/components";
import { Home } from "common/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<div>About page</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
