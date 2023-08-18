import useid from "../hooks/useId";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: useid,
    Element: HomePage,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useid,
    Element: PropertiesPage,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
];
