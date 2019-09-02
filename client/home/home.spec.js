const assert = require('assert');
const jsdom = require('jsdom');
const home = require('./home');

const { JSDOM } = jsdom;

describe('The Home Page', () => {

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body><section class="greeting"><h2>REPLACE ME!</h2></section></body></hmtl>', {
      url: 'http://foo.bar/?name=jOE',
    });
    global.document = dom.window.document;
    global.window = dom.window;
  });

  it('should replace greeting for any named user', () => {
    home.addGreetingTo('.greeting > h2');
    const element = document.querySelector('.greeting > h2');
    assert.equal('Welcome Joe!', element.innerHTML);
  });
});

describe('Sanitization', () => {

  it('should replace greeting for any named user', () => {
    const sanitized = home.sanitize('joe5');
    assert.equal('Joe', sanitized);
  });

  it('should properly capitalize all names', () => {
    const sanitized = home.sanitize('first-second-third-fourth');
    assert.equal('First-Second-Third-Fourth', sanitized);
  });

});