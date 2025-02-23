import { useRoutes } from "react-router-dom";
import { Layout } from "./layout";
import { Product } from "./Product";
import { Details } from "./Details";
import { Home } from "./Home";

export function PageRouter() {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/product", element: <Product /> },
        {
          path: "/detail/:id",
          element: <Details />,
        },
        { path: "*", element: <>Pagina no encontrada</> },
      ],
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  const element = useRoutes(routes);

  return <>{element}</>;
}

export default PageRouter;