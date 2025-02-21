import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import ProductPage from "./pages/Product";
import DetailsPage from "./pages/Details";
 
const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<ProductPage/>}>
<Route path="/" element={<ProductPage />} />
<Route path="detail/:id" element={<DetailsPage />} />
</Route>
  )
)
const App = () => {
  return (
<>
<RouterProvider router={router}/>
</>
  );
};
export default App;