import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    );
};

export default Router