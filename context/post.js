import { createContext, useContext } from "react";

const PostContext = createContext();

export const PostProvider = ({value, children}) => {
    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => {
    return useContext(PostContext);
}