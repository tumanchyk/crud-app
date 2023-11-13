import { createContext, useState, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Login from '../pages/Login/Login';
import AddItem from "../pages/AddItem";
import EditItem from '../pages/EditItem';

const ItemList = lazy(() => import('../pages/List'));

export const Context = createContext();

const App = () => {
  const [list, setList] = useState([]);
  const [typeList, setTypeList] = useState("all");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem('LoggedInUser'));
    if (storedUser) {
      setIsLoggedIn(true);
    } else {
      window.localStorage.setItem('LoggedInUser', false)
    }
  }, [])

  useEffect(() => {
    const storedList = JSON.parse(window.localStorage.getItem('TravelList'));

    if (storedList && storedList.length) {
        setList(storedList);
    } else {
        window.localStorage.setItem('TravelList', JSON.stringify([]));
    }
  }, [])

  useEffect(() => {
      window.localStorage.setItem('LoggedInUser', isLoggedIn)
  }, [isLoggedIn])

  useEffect(() => {
      window.localStorage.setItem('TravelList', JSON.stringify(list))
  }, [list])


  return (
    <Context.Provider value={{list, setList, isLoggedIn, setIsLoggedIn, typeList, setTypeList}}>
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
      </Routes>
    </Context.Provider>
  );
}

export default App;
