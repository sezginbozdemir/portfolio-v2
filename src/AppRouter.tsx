import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
