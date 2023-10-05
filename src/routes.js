import { lazy } from 'react';

const Login = lazy(() => import('./pages/Authentication/Login'));
const Register = lazy(() => import('./pages/Authentication/Register'));
const RecoveryPassword = lazy(() => import('./pages/Authentication/RecoveryPassword'));
const Home = lazy(() => import('./pages/Internal/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Profile = lazy(() => import('./pages/Internal/Profile'));
const InsertProducts = lazy(() => import('./pages/Internal/InsertProduct'));
const UpdatePrice = lazy(() => import('./pages/Internal/UpdatePrice'));


const routes = [
    { path: '/', element: Home, title: 'Home', tab: true },
    { path: '/profile', element: Profile, title: 'perfil', tab: true },
    { path: '/insert-products', element: InsertProducts, title: 'Cadastro de Produto', tab: true },
    { path: '/update-price', element: UpdatePrice, title: 'Atualiza Preço', tab: true },
    { path: '/login', element: Login, title: 'Login' },
    { path: '/register', element: Register, title: 'Registro' },
    { path: '/recovery-password', element: RecoveryPassword, title: 'Recuperar Senha' },
    { path: '*', element: NotFound, title: 'Página não encontrada' },
]

export default routes;