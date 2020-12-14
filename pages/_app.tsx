import App, { Container } from 'next/app';

import React from 'react';
//import { withApplicationInsights } from 'next-applicationinsights';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }

  componentDidMount() {
    if (window != null) {
      //@ts-ignore
      const { appInsights } = window;

      //TODO: remains undefined
      appInsights && appInsights.addTelemetryInitializer((envelope: any) => {
        envelope.tags[`ai.cloud.role`] = process.env.FRONT_ROLE_NAME;
        envelope.tags[`ai.cloud.roleInstance`] = process.env.APP_INSTANCE_NAME;
      });
    }
  }
}

//TODO: env var not available in frontend (and should not be exposed anyways)
console.log('Front appInsights init with: ', process.env.APP_INSIGHTS);
// let appWithInsights = withApplicationInsights({
//   instrumentationKey: process.env.APP_INSIGHTS,
//   isEnabled: true,
// })(MyApp);


export default MyApp;
