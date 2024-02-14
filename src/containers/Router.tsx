import React, { ReactElement } from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { LoginPage } from "./Login";
import { RegisterPage } from "./Register";

const router = createBrowserRouter([
    {
        path:"/",
        element: <h1>test</h1>
    },
    {
        path:"/login",
        element: <LoginPage />
    },
    {
        path:"/register",
        element: <RegisterPage />
    }
]);

export function Router(): ReactElement {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}