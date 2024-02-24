import { ContentTypeProvider } from "context/ContentTypeContext";

export const Posts = (props) => {

    console.log("POSTS PROPS: ", props);

    return (
        <ContentTypeProvider
            value={{ 
                title: props.title
             }}
        >
        </ContentTypeProvider>
    )
}