import { expect } from 'chai';
import { Logger as WinstonLogger, ConsoleTransportInstance } from 'winston';

import Logger from './logger';

describe('Logger', () => {
  it('should have proper options', () => {
    const loggerConsoleParams = <ConsoleTransportInstance>Logger.transports.console;

    expect(Logger).to.be.instanceOf(WinstonLogger);
    expect(loggerConsoleParams.timestamp).to.be.true;
    expect(loggerConsoleParams.colorize).to.be.true;
    expect(loggerConsoleParams.prettyPrint).to.be.true;
  });
});
