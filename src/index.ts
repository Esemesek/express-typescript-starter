import * as Http from 'http';

import Server from './server';
import Logger from './logger';

const SERVER_PORT = 8080;

const httpServer = Http.createServer(
  Server.bootstrap(SERVER_PORT).getApp(),
);

httpServer.listen(SERVER_PORT);

httpServer.on('error', (error: Error) => {
  Logger.error(`There was as error while running server: ${error}`);
  throw error;
});

httpServer.on('listening', () => {
  const address = `${httpServer.address().address}:${httpServer.address().port}`;
  Logger.info(`Server is listening on ${address}`);
});
