import useId from "../hooks/useId";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";

export const navbar = [
    {
        id: useId,
        title: "Home",
        element: <HomePage />,
        path: "/home",
        isPrivate: false,
        hidden: false,
    },
    {
        id: useId,
        title: "Properties",
        element: <PropertiesPage />,
        path: "/properties",
        isPrivate: false,
        hidden: false,
    },
];
