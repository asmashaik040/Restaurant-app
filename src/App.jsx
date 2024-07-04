import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import SpecialMenu from "./components/SpecialMenu";
import HomePage from "./HomePage";
import MainLayout from "./MainLayout";
import BookTable from "./components/BookTable";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/table" element={<BookTable />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
