import { Navigate } from 'react-router';
import {useContext} from 'react';
import { Context } from '../App';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useContext(Context);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>;
};

export default PublicRoute;