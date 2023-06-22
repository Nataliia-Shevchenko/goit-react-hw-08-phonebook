import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
// import { useSelector } from "react-redux"
// import { selectIsLoggedIn } from "redux/auth/auth-selectors"
import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <Navigation />
        <AuthNav />
        <UserMenu />
        {/* {isLoggedIn ? <UserMenu/> : <AuthNav />}  */}
      </header>
    </>
  );
};
