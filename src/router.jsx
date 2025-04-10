import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Project1 from "./pages/projects/Project1";
import Project2 from "./pages/projects/Project2";
import Project3 from "./pages/projects/Project3";
import Project4 from "./pages/projects/Project4";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/1" element={<Project1 />} />
      <Route path="/project/2" element={<Project2 />} />
      <Route path="/project/3" element={<Project3 />} />
      <Route path="/project/4" element={<Project4 />} />
    </Routes>
  );
};

export default AppRoutes;
