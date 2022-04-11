import { useRoutes } from "react-router-dom";
import { Countries } from "../Pages/Countries";
import { CountryPage } from "../Pages/CountryPage";


export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Countries /> },
        { path: '/country/:id', element: <CountryPage /> },

    ])
}