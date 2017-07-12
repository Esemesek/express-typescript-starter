import { expect } from 'chai';

import Server from './server';

describe('Server', () => {
  it('should be bootstrapped', () => {
    expect(Server.bootstrap()).to.be.instanceOf(Server);
  });
});
