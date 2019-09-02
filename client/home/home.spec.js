const assert = require('assert');
const jsdom = require('jsdom');
const home = require('./home');

const { JSDOM } = jsdom;

describe('The Home Page', () => {
  function fetchDom(urlString = '') {
    const dom = new JSDOM(
      '<!DOCTYPE html><html><body><section class="greeting"><h2>Welcome!</h2></section></body></hmtl>',
      {
        url: `http://foo.bar/${urlString}`,
      }
    );
    global.document = dom.window.document;
    global.window = dom.window;
  }
  it('should replace greeting for any named user', () => {
    fetchDom('/?name=joe');
    home.addGreetingTo('.greeting > h2');
    const element = document.querySelector('.greeting > h2');
    assert.equal('Welcome Joe!', element.innerHTML);
  });

  it('should welcome an anonymous user', () => {
    fetchDom();
    home.addGreetingTo('.greeting > h2');
    const element = document.querySelector('.greeting > h2');
    assert.equal('Welcome!', element.innerHTML);
  });
});
