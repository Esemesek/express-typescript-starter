import * as Express from 'express';
import * as BodyParser from 'body-parser';

export default class Server {
  private app: Express.Application;

  constructor() {
    this.app = Express();

    this.config();
  }

  public getApp = (): Express.Application => this.app;

  private config(): void {
    this.app.use(BodyParser.json());
    this.app.use(BodyParser.urlencoded({
      extended: true,
    }));
  }

  public static bootstrap = (): Server => new Server();
}
