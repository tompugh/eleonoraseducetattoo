import './app.scss'

import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './core/context/AppContext';
import { AppRoutes } from './routes/AppRoutes';
import { MainLayout } from './ui/layout/MainLayout';
import { AuthProvider } from './core/context/AuthContext';


function App() {

  return (
    <AuthProvider>
        <BrowserRouter>
            <AppProvider>
                <MainLayout>
                    <AppRoutes />
                </MainLayout>
            </AppProvider>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App
