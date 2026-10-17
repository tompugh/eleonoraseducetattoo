import { createContext, useContext } from "react";

type AuthContextType = {

    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType|undefined>(undefined);

export const AuthProvider = ({children }: { children: React.ReactNode }) => {

    const value = {
        isAuthenticated: true
    } as AuthContextType;

    return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)

}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error('useAuth must be used within an AuthProvider');
    return ctx;
}