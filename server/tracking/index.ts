import * as appInsights from 'applicationinsights';
import { TelemetryClient } from 'applicationinsights';

const {
  APP_INSIGHTS,
  APP_ROLE_NAME,
  APP_INSTANCE_NAME
} = process.env;

appInsights.setup(APP_INSIGHTS);
const {keys: KEY, tags: settings} = appInsights.defaultClient.context;
settings[KEY.cloudRole] = APP_ROLE_NAME || 'Default_NextJS_App';
settings[KEY.cloudRoleInstance] = APP_INSTANCE_NAME || 'Default_Local_Machine';
appInsights.start();

const trackingClient: TelemetryClient = appInsights.defaultClient;

export { trackingClient };
