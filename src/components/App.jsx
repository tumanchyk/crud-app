import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import ItemList from '../pages/List';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddItem from "../pages/AddItem";
import EditItem from '../pages/EditItem';
import { useSelector } from 'react-redux';

const App = () => {

const user = useSelector(state => state.auth)
// console.log(user);

  return (
      <Routes>
        <Route index element={<Navigate to="/list" />} />
        <Route
          path="/list"
          element={
            <PrivateRoute component={ItemList} redirectTo={'/login'} />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute component={AddItem} redirectTo={'/login'} />
          }
        />
        <Route
          path="/edit/:id"
          element={<PrivateRoute component={EditItem} redirectTo={'/login'} />}
          />
        <Route
            path="/login"
            element={
              <PublicRoute component={Login} redirectTo={'/list'} />
            }
          />
        <Route
            path="/register"
            element={
              <PublicRoute component={Register} redirectTo={'/list'} />
            }
          />
      </Routes>
  );
}

export default App;
