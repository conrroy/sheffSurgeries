import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import RegisterForm from '../pages/register/RegisterForm';
import Login from '../pages/login/Login';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/users" replace />, index: true },
        // { path: '/dashboard', element: <Navigate to="/dashboard/users" replace />, index: true },
        { path: '/dashboard/users', element: <Users /> },
        // { path: '/dashboard/two', element: <PageTwo /> },
        // { path: '/dashboard/three', element: <PageThree /> },
        // { path: '/user/three', element: <PageThree /> },
        // {
        //   path: '/dashboard/user',
        //   children: [
        //     { element: <Navigate to="/dashboard/user/four" replace />, index: true },
        //     { path: '/dashboard/user/four', element: <PageFour /> },
        //     { path: '/dashboard/user/five', element: <PageFive /> },
        //     { path: '/dashboard/user/six', element: <PageSix /> },
        //   ],
        // },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <RegisterForm />,
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const Users = Loadable(lazy(() => import('../pages/Users')));
const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
