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
    {
        id: useId,
        title: "Sign In",
        element: <h1>Sign In</h1>,
        // element: <SignInPage />,
        path: "/sign-in",
        isPrivate: false,
        hidden: true,
    },
    {
        id: useId,
        title: "Sign Up",
        element: <h1>Sign Up</h1>,
        // element: <SignUpPage />,
        path: "/sign-up",
        isPrivate: false,
        hidden: true,
    },
];

