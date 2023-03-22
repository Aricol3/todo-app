import React from 'react';
import './App.css';
import AuthScreen from "./components/AuthScreen";
import TodoScreen from "./components/TodoScreen";
import {HashRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthScreen />,
    },
    {
        path: "/todos",
        element: <TodoScreen />,
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;