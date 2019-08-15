const assert = require('assert');

describe('The Players page', () => {

  const url = 'http://localhost:3000/players.html';

  const timeoutMillis = 3000;

  before(() => {
    browser.url(url);
    browser.setCookies({name:'auth.status', value:'signedin:joe'});
  });

  beforeEach(() => {
    browser.url(url);
  });

  it('should set page title', () => {
    const title = browser.getTitle();
    assert.equal(title, 'Players');
  });

  it('should populate players list', () => {
    browser.waitUntil(
      () => browser.$('#players-list > ul').getHTML(),
      timeoutMillis,
      'expected players list (empty or not)'
    );
  });

  it('should open player details', () => {
    browser.waitUntil(
      () => browser.$('#players-list > ul > li').getHTML(),
      timeoutMillis,
      'expected players list'
    );

    browser.$('#players-list > ul > li > button:first-child').click();

    browser.waitUntil(
      () => browser.$('#player > p').getHTML(),
      timeoutMillis,
      'expected player details'
    );
  });

});
