function fetchQuote(callback) {
  console.log('using fake quotes');
  callback({
    content: 'This is a quote.',
    title: 'Unknown'
  });
}

module.exports.fetchQuote = fetchQuote;
