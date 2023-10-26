import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/Home/HomeScreen";
// import DashBoard from "./Pages/DashBoard";
import Members from "./Pages/Members";
import Payments from "./Pages/Payments";
import SportsPlan from "./Pages/SportsPlan";
import Profile from "./Pages/Profile";

const appName = import.meta.env.VITE_APP_NAME || "Jerked Country Club";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <AppLayout>
                                <App {...props} />
                            </AppLayout>
                        }
                    >
                        <Route
                            index
                            element={<Navigate replace to="/members" />}
                        />
                        {/* <Route path="/dashboard" element={<DashBoard />} /> */}
                        <Route path="/members" element={<Members />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/sportsplan" element={<SportsPlan />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>
                {/* <AppLayout>
                    <App {...props} />
                </AppLayout> */}
            </BrowserRouter>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
