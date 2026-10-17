import { createContext, useContext } from "react"

type AppContextType = {

}

export const AppContext = createContext<AppContextType|undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const value = {} as AppContextType;

    return (<AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>);

}

export const useAppContext = () => {

    const ctx = useContext(AppContext);
    if(!ctx) throw new Error('useAppContext must be used within an AppProvider');
    return ctx;

}