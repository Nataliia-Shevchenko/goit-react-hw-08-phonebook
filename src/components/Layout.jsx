import { Suspense, useEffect } from 'react';
import { AppBarComp } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';

export const Layout = () => {

  const {token, user} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  
  useEffect(() => {
    token && !user && 
    dispatch(refreshUser());
  }, [dispatch, token, user]);

  return (
    <div>
      <AppBarComp />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
