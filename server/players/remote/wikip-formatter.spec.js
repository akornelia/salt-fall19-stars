const assert = require('assert');
const formatter = require('./wikip-formatter');

describe('Wikipedia Formatter', () => {

  describe('Wiki Titles', () => {

    it('should replace spaces with underscore', () => {
      const john = formatter.wikiTitle('John Doe');
      assert.equal('John_Doe', john);

      const jane = formatter.wikiTitle('Jane   Doe');
      assert.equal('Jane_Doe', jane);
    });

    it('should start new words with uppercase char', () => {
      const john = formatter.wikiTitle('John doe');
      assert.equal('John_Doe', john);
    });
  });

  describe('Wiki Response', () => {

    const wikiArticle = {
      batchcomplete: '',
      warnings: {
        extracts: 'some warning'
      },
      query:{
        normalized: [
          {
            from: 'Foo_Bar',
            to: 'Foo Bar'
          }
        ],
        pages: {
          123: {
            pageid: 123,
            ns: 0,
            title: 'Foo Bar',
            extract: '<p>Lorem ipsum dolor...</p>'
          }
        }
      }
    };
    
    it('should parse pages content', () => {
      const extract = formatter.parse(wikiArticle);
      assert.equal('<p>Lorem ipsum dolor...</p>', extract);
    });
  });
});
