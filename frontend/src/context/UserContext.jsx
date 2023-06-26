    import { createContext, useContext, useEffect, useState } from "react";

    const UserContext = createContext();

    export const UserContextProvider = ({ children }) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }, []);

        return (
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>
        );
    };

    export const useUserContext = () => useContext(UserContext);
