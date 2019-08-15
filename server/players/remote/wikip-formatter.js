function wikiTitle(name) {
  return name.split(/\s+/)
    .map(w => firstLetterUppercase(w))
    .join('_');
}

function readExtract(json) {
  const pages = json.query.pages;
  const firstKey = Object.keys(pages)[0];
  return pages[firstKey].extract;
}

function firstLetterUppercase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports.wikiTitle = wikiTitle;
module.exports.parse = readExtract;