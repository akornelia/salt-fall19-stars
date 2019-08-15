const assert = require('assert');

describe('Login page', () => {

  const timeoutMillis = 3000;

  it('should load login page', () => {
    browser.url('http://localhost:3000/login.html');
    const title = browser.getTitle();
    assert.equal(title, '</salt> :: Login');
  });

  it('should notify user on unsuccessful logins', () => {
    browser.url('http://localhost:3000/login.html');
    browser.$('input[type=text]').addValue('joe');
    browser.$('input[type=password]').addValue('invalid-password');
    browser.$('#sign-in>button').click();
    browser.waitUntil(
      () => browser.getUrl() === 'http://localhost:3000/401.html',
      timeoutMillis,
      'expected 401 page'
    );
  });

  it('should load welcome page after successful authentication', () => {
    browser.url('http://localhost:3000/login.html');
    browser.$('input[type=text]').addValue('joe');
    browser.$('input[type=password]').addValue('secret');
    browser.$('#sign-in>button').click();
    browser.waitUntil(
      () => browser.getUrl() === 'http://localhost:3000/',
      timeoutMillis,
      'expected index page'
    );
  });
});
