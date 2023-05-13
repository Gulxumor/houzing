import PropertiesProvider from "./properties";

const RootContext = ({ children }) => (
  <PropertiesProvider>{children}</PropertiesProvider>
);
export default RootContext;
