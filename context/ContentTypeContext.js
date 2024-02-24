import { createContext, useContext } from "react";

const ContentTypeContext = createContext();

// export const ContentTypeProvider = ({value, children}) => {
//     return (
//         <ContentTypeContext.Provider value={value}>
//             {children}
//         </ContentTypeContext.Provider>
//     );
// };

export const ContentTypeProvider = ContentTypeContext.Provider;

export const useContentType = () => {
    return useContext(ContentTypeContext);
};