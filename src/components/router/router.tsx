import React, { ReactElement } from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../../pages/login";

const router = createBrowserRouter([
    {
        path:"/",
        element: <h1>test</h1>
    },
    {
        path:"/auth",
        element: <LoginPage />
    }
])

export function Router(): ReactElement {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}