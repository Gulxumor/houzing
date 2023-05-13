import useId from "../hooks/useId";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
export const navbar = [

    {
        id: useId,
        title: "Home",
        element: <Home />,
        path: "/home",
        isPrivate: false,
        hidden: false,
    },
    {
        id: useId,
        title: "Properties",
        element: <Properties />,
        path: "/properties",
        isPrivate: false,
        hidden: false,
    },
];
