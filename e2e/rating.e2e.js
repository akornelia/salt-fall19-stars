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

  it('should add rating to player', () => {

    browser.click('#players-list > ul > li > button');

    browser.waitUntil(
      () => browser.getHTML('#ratings-container> .rating'),
      timeoutMillis,
      'expected player details'
    );
  });
});
