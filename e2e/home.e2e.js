const assert = require('assert');

describe('The Index Page', () => {

  const url = 'http://localhost:3000/';

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
    assert.equal(title, 'Salt :: Fundamentals');
  });

  it('should display headline', () => {
    const headline = browser.getHTML('body > h1', false);
    assert.equal(headline, 'Salt :: Fundamentals');
  });

  it('should load quote block', () => {
    browser.waitUntil(
      () => browser.getHTML('.quote'),
      timeoutMillis,
      'expected quote'
    );
  });

  it('should greet named visitor', () => {
    const greeting = browser.getHTML('section > h2', false);
    assert.equal(greeting, 'Welcome Joe!');
  });
});
