import { Logger, transports as Transports } from 'winston';

export default new Logger({
  transports: [
    new Transports.Console({
      timestamp: true,
      colorize: true,
      prettyPrint: true,
    }),
  ],
});
