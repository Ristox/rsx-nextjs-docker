import { AppProps } from 'next/app';
import Head from "next/head";
import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import theme from '../utils/theme';

//import { withApplicationInsights } from 'next-applicationinsights';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

    React.useEffect(() => {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      jssStyles?.parentElement?.removeChild(jssStyles);
    }, []);

    return (
        <>
          <Head>
            <title>Test NextJS + AppInsights</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </>
    );


  // componentDidMount() {
  //   if (window != null) {
  //     //@ts-ignore
  //     const { appInsights } = window;
  //
  //     //TODO: remains undefined
  //     appInsights && appInsights.addTelemetryInitializer((envelope: any) => {
  //       envelope.tags[`ai.cloud.role`] = process.env.FRONT_ROLE_NAME;
  //       envelope.tags[`ai.cloud.roleInstance`] = process.env.APP_INSTANCE_NAME;
  //     });
  //   }
  // }
}

//TODO: env var not available in frontend (and should not be exposed anyways)
//console.log('Front appInsights init with: ', process.env.APP_INSIGHTS);
// let appWithInsights = withApplicationInsights({
//   instrumentationKey: process.env.APP_INSIGHTS,
//   isEnabled: true,
// })(MyApp);


export default MyApp;
