import ReactDOM from 'react-dom/client';
import RootContext from './context';
import './index.css';
import { Root } from './root';
// import "antd/dist/antd.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RootContext>
    <Root />
  </RootContext>

);
