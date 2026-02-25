import { createContext, useContext } from "react";

export const UsersContext = createContext(null);

export const useUsers = () => {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("useUsers must be used inside UsersProvider");
    }
    return context;
};
