import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { NextIntlClientProvider } from "next-intl";
// import { createTheme, NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";

config.autoAddCss = false;

// const theme = createTheme({
//   type: "light", // it could be "light" or "dark"
//   theme: {
//     colors: {
//       primary: ``,
//       secondary: ``,
//       error: ``
//     },
//   }
// })

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <NextIntlClientProvider
        locale={router.locale}
        messages={{}}
      >
        {/* <NextUIProvider theme={theme}> */}
          <div className="font-body">
              <Component {...pageProps} />
          </div>
        {/* </NextUIProvider> */}
    </NextIntlClientProvider>
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
