import { metaServerWs } from './meta-server-ws';

describe('metaServerWs', () => {
  it('should work', () => {
    expect(metaServerWs()).toEqual('meta-server-ws');
  });
});
