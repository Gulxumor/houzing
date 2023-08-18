import {
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Navigate to={"/home"} />} />
      {navbar.map(({ id, path, Element }) => (
        <Route key={id} path={path} element={<Element />} />
      ))}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
  )
);

const Root = () => {
  return (
    <Routes>
      <RouterProvider router={router} />
    </Routes>
  );
};
export default Root;
