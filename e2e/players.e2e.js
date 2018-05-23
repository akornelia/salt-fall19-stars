const assert = require('assert');

describe('The Players page', () => {

  const url = 'http://localhost:3000/players.html';

  const timeoutMillis = 3000;

  before(() => {
    browser.url(url);
    browser.setCookie({name:'auth.status', value:'signedin:joe'});
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
      () => browser.getHTML('#players-list > ul'),
      timeoutMillis,
      'expected players list (empty or not)'
    );
  });

  it('should open player details', () => {
    browser.waitUntil(
      () => browser.getHTML('#players-list > ul > li'),
      timeoutMillis,
      'expected players list'
    );

    browser.waitUntil(
      () => browser.click('#players-list > ul > li'),
      timeoutMillis,
      'tried to open player details'
    );

    browser.waitUntil(
      () => browser.getHTML('#player > p'),
      timeoutMillis,
      'expected player details'
    );
  });

});
