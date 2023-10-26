import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Members from "./Pages/Members";
import Payments from "./Pages/Payments";
import SportsPlan from "./Pages/SportsPlan";
import Profile from "./Pages/Profile";
import AppDashboard from "./Pages/AppDashboard";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard";

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
            // <BrowserRouter>
            //     <Routes>
            //         <Route
            //             element={
            //                 <AppLayout>
            //                     <App {...props} />
            //                 </AppLayout>
            //             }
            //         >
            //             <Route
            //                 index
            //                 element={<Navigate replace to="/appdashboard" />}
            //             />
            //             <Route path="/appdashboard" element={<AppDashboard />} />
            //             <Route path="/members" element={<Members />} />
            //             <Route path="/payments" element={<Payments />} />
            //             <Route path="/sportsplan" element={<SportsPlan />} />
            //             <Route path="/profile" element={<Profile />} />
            //             <Route path="/register" element={<Register />} />
            //         </Route>
            //     </Routes>
            // </BrowserRouter>
            <App {...props} />
        );
    },
    progress: {
        color: "#4B5563",
    },
});
