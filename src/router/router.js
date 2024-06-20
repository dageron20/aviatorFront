import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import { Landing } from "../pages/Landing";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Landing />}>

            </Route>
        </>
    )
);