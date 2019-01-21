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

  it('should add rating to player', () => {

    browser.$('#players-list > ul > li > button').click();

    browser.waitUntil(
      () => browser.$('#ratings-container> .rating').getHTML(),
      timeoutMillis,
      'expected player details'
    );
  });
});
