import { useRoutes } from "react-router-dom";
import { Countries } from "../Pages/Countries";
import { CountryPage } from "../Pages/CountryPage";
import { CountryUpdate } from "../Pages/CountryUpdate";


export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Countries /> },
        { path: '/country/:id', element: <CountryPage /> },
        { path: '/update-country/:id', element: <CountryUpdate /> },
    ])
}