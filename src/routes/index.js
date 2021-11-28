import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import SecurityRoutes from './security.routes';

import { useAuth } from '../contexts/auth';

const Routes = () => {
  const { isAdmin, signed } = useAuth();

  if (isAdmin === true && signed) {
    return <SecurityRoutes />;
  } if (isAdmin === false && signed) {
    return <AppRoutes />;
  }
  return <AuthRoutes />;

  // return (signed ? <AppRoutes /> : <AuthRoutes />);
  // return (<SecurityRoutes />);
};

export default Routes;
