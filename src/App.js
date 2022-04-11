import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import ModuleOne from './component/moduleOne';
import ModuleTwo from './component/moduleTwo';
import History from './indexDb/history';
import UserList from './indexDb/userList';
import UserDetails from './indexDb/userDetails';
import { DBConfig } from './indexDb/dbConfig';
import { initDB } from 'react-indexed-db';
 
initDB(DBConfig);

function App() {
  let routes = useRoutes([
    { path: "/", element: <ModuleOne /> },
    { path: "/component", element: <ModuleTwo /> },
    { path: "/history", element: <History /> },
    { path: "/user-lists", element: <UserList /> },
    { path: "/user-details", element: <UserDetails/> },
    // ...
  ]);
  return routes;
}
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
