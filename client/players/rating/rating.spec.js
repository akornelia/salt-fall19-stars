const assert = require('assert');
const jsdom = require('jsdom');

describe('The Rating component', () => {

  let value;
  const id = '123';
  const mockClient = {
    getRatingFor: (id, callback) => { callback({rating: value}); },
    update: (id, v, callback) => { value = v; callback({rating: value}); },
  };

  var rating = require('./rating').create(mockClient);

  beforeEach(() => {
    value = 3;
    const { JSDOM } = jsdom;
    const dom = new JSDOM('<!DOCTYPE html><html><body><div id="test" /></body></html>', {url: 'http://testhost:8080/bar.html'});
    global.document = dom.window.document;
    global.window = dom.window;
  });

  it('should append to selection', () => {
    rating.appendTo('#test', id);
    const ratingsContainer = document.querySelector('#test');
    const el = ratingsContainer.firstChild;
    assert.equal(el.getAttribute('class'), 'rating');
  });

  it('should set current rate', () => {
    rating.appendTo('#test', id);
    const el = document.querySelector('.rating');
    assert.equal(el.getAttribute('data-rating'), value);
  });

  it('should add five stars', () => {
    rating.appendTo('#test', id);
    const stars = document.querySelectorAll('.star');
    assert.equal(stars.length, 5);
  });

  it('should update component', () => {
    rating.appendTo('#test', id);
    const newValue = value-1;
    rating.update(id, value-1);
    const el = document.querySelector('.rating'); 
    assert.equal(el.getAttribute('data-rating'), newValue);
  });

  it('should update remote value', () => {
    rating.appendTo('#test', id);
    const newValue = value-1;
    rating.update(id, newValue);
    assert.equal(value, newValue);
  });
});
