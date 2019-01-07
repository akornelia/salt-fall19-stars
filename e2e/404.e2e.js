const assert = require('assert');
const config = require('../server/config');

describe('Not Found', () => {

  const port = config.server.port;
  const host = 'http://localhost:' + port;

  before(() => {
    browser.url(host);
    browser.setCookies({name:'auth.status', value:'signedin'});
  });

  it('should load when resource not exist', () => {
    browser.url(host + '/im-not-here.html');
    const title = browser.getTitle();
    assert.equal(title, 'Not Found');
  });
});
