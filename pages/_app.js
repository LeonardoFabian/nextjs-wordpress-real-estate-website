import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import { NextIntlClientProvider } from "next-intl";
// import { createTheme, NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";

import { ApolloProvider } from "@apollo/client";
import client from "client";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    // <NextIntlClientProvider
    //   locale={router.locale}
    //  messages={{}}
    // >
      <ApolloProvider client={client}>
            {/* <NextUIProvider theme={theme}> */}
              <div className="font-body">
                  <Component {...pageProps} />
              </div>
            {/* </NextUIProvider> */}
      </ApolloProvider>
    // </NextIntlClientProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for 
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's getInitialProps and fills appProps.pageProps
//   const appProps = await App.getInitialProps(appContext);
//   return {...appProps}
// }

export default MyApp;
