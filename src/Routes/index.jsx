import { createBrowserRouter } from "react-router-dom";

import Content from "../Content/App.jsx";
import NotFound from "../Views/Error.jsx";
import Principal from "../Views/Principal.jsx";
import Producto from "../Views/Producto.jsx";
import Car from "../Views/Carrito.jsx";
import Api from "../Apis/Api.jsx";

export const Router = createBrowserRouter([    
    {
      path: "/",
      element: <Content />,
      errorElement: <NotFound />,
        children: [
            {
                index : true,
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
        ],
    },
]);

