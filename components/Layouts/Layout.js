import Head from "next/head";
import { MainMenu } from "../MainMenu";

const Layout = ({children}) => {

    console.log("LAYOUT: ", children);

    return (
        <main>
            {children}
        </main>
    );
};

export default Layout;