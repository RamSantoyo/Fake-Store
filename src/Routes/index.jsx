import { createBrowserRouter } from "react-router-dom";

import Content from "../Content/App.jsx";
import NotFound from "../Views/Error.jsx";
import Store from "../Views/Store.jsx";
import Api from "../Apis/Api.jsx";

export const Router = createBrowserRouter([    
    {
      path: "/",
      element: <Content />,
      errorElement: <NotFound />,
        children: [
            {
                index : true,
                element: <Store />,
                //loader: Api.Allproducts,
            },
            {
                //path: "/favoritos",
                //element: <Favoritos />,                
            },
            {
                //path: "/pokemon/:name",
                //element: <Pokemon />,
                //loader: ({ params }) => api.getPokemon(params.name),
            },  
        ],
    },
]);