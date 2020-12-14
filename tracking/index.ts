import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js'

import { createBrowserHistory } from 'history';


const connectionString = process.env.AI_CONNECTION
const reactPlugin = new ReactPlugin();
const browserHistory = createBrowserHistory({basename: ''});

const tracking = new ApplicationInsights({
  config: {
    connectionString,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    }
  }
})
tracking.loadAppInsights();

export default (Component) => withAITracking(reactPlugin, Component);
export const appInsights = tracking.appInsights;
