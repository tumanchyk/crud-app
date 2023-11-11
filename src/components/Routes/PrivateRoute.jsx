import { Navigate } from 'react-router';
import {useContext} from 'react';
import { Context } from '../App';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useContext(Context);

  return isLoggedIn ? <Component/> : <Navigate to={redirectTo} />
}

export default PrivateRoute;