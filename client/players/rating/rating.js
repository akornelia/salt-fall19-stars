/*
 * Hint: Use this [https://codepen.io/jaklec/pen/OZrVWb] template to 
 * build a rating widget. 
 * 
 * The major part of the template goes into this file.
 * The CSS and JS action should go somewhere else...
 */
const ratingsModule = (function() {

  function Rating(client) {
    this.client = client;
  }

  Rating.prototype.appendTo = function(selection, id) {
    console.log('Not Implemented!');
  };

  Rating.prototype.update = function(id, value) {
    console.log('Not Implemented!');
  };

  return {
    Rating: Rating,
  };
})();

module.exports.create = client => new ratingsModule.Rating(client);
