import { createContext, useContext } from "react";

const PageContext = createContext();

// page wrapper
export const PageProvider = ({value, children}) => {
    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = () => {
    return useContext(PageContext);
};