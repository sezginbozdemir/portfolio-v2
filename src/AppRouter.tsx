import { Routes, Route, BrowserRouter } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
