import Server from './server';
import Logger from './logger';

const SERVER_PORT = 8080;

const app = Server.bootstrap().getApp();

app.listen(SERVER_PORT, () => {
  Logger.info(`Application listening on port ${SERVER_PORT}`);
});
