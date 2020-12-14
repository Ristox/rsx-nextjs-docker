import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js'

import { createBrowserHistory } from 'history';


const instrumentationKey = process.env.APP_INSIGHTS;
const reactPlugin = new ReactPlugin();
const browserHistory = createBrowserHistory({basename: ''});

const tracking = new ApplicationInsights({
  config: {
    instrumentationKey,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    },
  }
})
tracking.loadAppInsights();

export default (Component) => withAITracking(reactPlugin, Component);
export const appInsights = tracking.appInsights;
