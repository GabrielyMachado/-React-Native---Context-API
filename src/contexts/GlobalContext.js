import { createContext } from 'react';

export const GlobalContext = createContext({});

export function InfoProvider( {children}) {
    const nome = 'Gabriely'
    return (
        <GlobalContext.Provider value={{
            nome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}