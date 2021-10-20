import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase/useFirebase';

// context declaration
export const AuthContext = createContext();

// auth provider for context api
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;