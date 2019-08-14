const assert = require('assert');

describe('The Index Page', () => {

  describe('As logged in user', () => {
    const url = 'http://localhost:3000/';
    const timeoutMillis = 3000;

    before(() => {
      browser.url(url);
      browser.setCookies({ name: 'auth.status', value: 'signedin:joe' });
    });

    it('should set page title', () => {
      browser.url(url);
      const title = browser.getTitle();
      assert.equal(title, 'Salt :: Fundamentals');
    });

    it('should display headline', () => {
      browser.url(url);
      const headline = browser.$('body > h1').getHTML(false);
      assert.equal(headline, 'Salt :: Fundamentals');
    });

    it('should greet visitor', () => {
      browser.url(url);
      const greeting = browser.$('section > h2').getHTML(false);
      assert.equal(greeting, 'Welcome Joe!');
    });

    it('should load quote block', () => {
      browser.waitUntil(
        () => browser.$('.quote').getHTML(),
        timeoutMillis,
        'expected quote'
      );
    });
  });
});
