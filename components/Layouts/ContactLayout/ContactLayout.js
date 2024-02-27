import { useContentType } from "context/ContentTypeContext";
import Layout from "../Layout";

const ContactLayout = ({children}) => {

    const contentType = useContentType();

    console.log("CONTACT LAYOUT CHILDREN: ", children);

    return (
        <Layout title={`${contentType} Layout`}>
            <section className={`contact ${contentType}-layout`}>
                {children}
            </section>
        </Layout>
    );
};

export default ContactLayout;