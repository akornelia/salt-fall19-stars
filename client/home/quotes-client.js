function fetchQuote(callback) {
  const uri = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
  const xhr = new XMLHttpRequest();
  const async = true;

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const json = JSON.parse(xhr.responseText);
      callback(json[0]);
    }
  };
  xhr.open('GET', uri, async);
  xhr.send();
}

module.exports.fetchQuote = fetchQuote;