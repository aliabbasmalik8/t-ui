import { lazy } from 'react';

const Login = lazy(() => import('views/Auth/login'));
const SignUp = lazy(() => import('views/SignUp'));
const Home = lazy(() => import('views/Home'));

const appRoutes = [
  {
    path: '/dashboard',
    component: Home,
    isPrivate: true,
    exact: true,
  },
  {
    path: '/accounts/signin',
    component: Login,
    exact: true,
  },
  {
    path: '/accounts/signup',
    component: SignUp,
    exact: true,
  },
];

export default appRoutes;
