function fetchQuote(callback) {
  const uri = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

  const xhr = new XMLHttpRequest();
  throw 'Not Implemented!';
}

module.exports.fetchQuote = fetchQuote;
