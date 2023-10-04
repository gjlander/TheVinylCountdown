import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <NextUIProvider>
                <App />
            </NextUIProvider>
        </React.StrictMode>
    </BrowserRouter>
);
