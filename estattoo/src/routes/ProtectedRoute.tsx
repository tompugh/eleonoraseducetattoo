import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { ROUTE } from './routePath.ts';
import { useAuth } from '../core/context/AuthContext.tsx';

function ProtectedRoute() {
    return (
        <InternalProtectedRoute>
            <Outlet />        
        </InternalProtectedRoute>
    );
}

function InternalProtectedRoute({ children }: { children: React.ReactNode }) {

    const navigate = useNavigate();
    const authContext = useAuth();
    
    useEffect(() => {
        
        if (!authContext.isAuthenticated)
            navigate(ROUTE.HOME);
        
    }, [authContext]);
    
    return (

        <>
            {authContext.isAuthenticated && children }
        </>
        
        

    );

};


export default ProtectedRoute;