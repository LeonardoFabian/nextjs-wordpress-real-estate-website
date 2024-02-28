import { useContentType } from "context/ContentTypeContext";
import Layout from "../Layout";

const PageLayout = ({ children }) => {

    const contentType = useContentType();
    
    console.log("PAGE LAYOUT CONTENT TYPE: ", contentType);
    console.log("PAGE LAYOUT CHILDREN: ", children);

    return (
        <Layout title={`${contentType} Layout`}>
            <section className={`page ${contentType}-layout overflow-hidden`}>{children}</section>
        </Layout>
    );
};

export default PageLayout;