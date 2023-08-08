import { createBrowserRouter, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Content from "../Content/App.jsx";
import NotFound from "../Views/Error.jsx";
import Principal from "../Views/Principal.jsx";
import Producto from "../Views/Producto.jsx";
import Car from "../Views/Carrito.jsx";
import Hearts from "../Views/Hearts.jsx";
import Api from "../Apis/Api.jsx";

// Componente funcional para la ruta de favoritos condicional
function ConditionalHeartsRoute() {
  const logeo = useSelector((state) => state.User.value);

  // Si el usuario está logeado, renderiza la ruta de favoritos, de lo contrario, redirige a la página principal
  return !logeo ? <NotFound /> : <Hearts />;
}

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Principal />,
      },
      {
        path: "/producto/:id",
        element: <Producto />,
        loader: ({ params }) => Api.Producto(params.id),
      },
      {
        path: "/carrito",
        element: <Car />,
      },
      {
        path: "/hearts",
        element: <ConditionalHeartsRoute />, // Utiliza el componente funcional condicional
      },
    ],
  },
]);
