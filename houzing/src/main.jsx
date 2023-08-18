import ReactDOM from "react-dom/client";
import Root from "./root/index.jsx";
import "./index.css";
import RootContext from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RootContext>
    <Root />
  </RootContext>
);

// 1:08:40