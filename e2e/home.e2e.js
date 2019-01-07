const assert = require('assert');

describe('The Index Page', () => {

  const url = 'http://localhost:3000/';

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

  it('should greet anonymous visitor', () => {
    browser.url(url);
    const greeting = browser.$('section > h2').getHTML(false);
    assert.equal(greeting, 'Welcome!');
  });

  it('should greet named visitor', () => {
    browser.url(url + '?name=joe');
    const greeting = browser.$('section > h2').getHTML(false);
    assert.equal(greeting, 'Welcome Joe!');
  });
});
