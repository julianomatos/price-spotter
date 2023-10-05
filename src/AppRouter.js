import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import RecoveryPassword from './pages/Authentication/RecoveryPassword';
import Home from './pages/Internal/Home';
import InsertProducts from './pages/Internal/InsertProduct';
import UpdatePrice from './pages/Internal/UpdatePrice';
import Profile from './pages/Internal/Profile';
import NotFound from './pages/NotFound';

function AppRouter() {
    return (
        <BrowserRouter> <Routes>
                {/* Rotas para as páginas internas */}
                <Route path="/" element={<Home />} />
                <Route path="/insert-products" element={<InsertProducts />} />
                <Route path="/update-price" element={<UpdatePrice />} />
                <Route path="/profile" element={<Profile />} />
                
                {/* Rotas para as páginas de autenticação */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recovery-password" element={<RecoveryPassword />} />
                
                {/* Rota padrão para página não encontrada */}
                <Route path ="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
           
    );
}

export default AppRouter;
