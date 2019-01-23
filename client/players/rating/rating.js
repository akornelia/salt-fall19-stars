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

  const starEmitterClass = 'star-emitter';

  Rating.prototype.appendTo = function(selection, id) {
    const widget = document.createElement('div');
    widget.setAttribute('class', 'rating' );
    widget.setAttribute('data-widget-id', id);
    this.client.getRatingFor(id, value => {
      widget.setAttribute('data-rating', value.rating);
      document.querySelector(selection).appendChild(widget);
    });
    widget.innerHTML = `
      <svg height="25" width="25" class="star ${starEmitterClass}" data-stars="1">
        <polygon points="9.9,1.1 3.3,21.78 19.8,8.58 0,8.58 16.5,21.78" />
      </svg>
      <svg height="25" width="25" class="star ${starEmitterClass}" data-stars="2">
        <polygon points="9.9,1.1 3.3,21.78 19.8,8.58 0,8.58 16.5,21.78" />
      </svg>
      <svg height="25" width="25" class="star ${starEmitterClass}" data-stars="3">
        <polygon points="9.9,1.1 3.3,21.78 19.8,8.58 0,8.58 16.5,21.78" />
      </svg>
      <svg height="25" width="25" class="star ${starEmitterClass}" data-stars="4">
        <polygon points="9.9,1.1 3.3,21.78 19.8,8.58 0,8.58 16.5,21.78" />
      </svg>
      <svg height="25" width="25" class="star ${starEmitterClass}" data-stars="5">
        <polygon points="9.9,1.1 3.3,21.78 19.8,8.58 0,8.58 16.5,21.78" />
      </svg>
    `;
    window.addEventListener('click', event => {
      if (event.target.classList.contains(starEmitterClass)) {
        this.rate(event.target, id);
      }
    });
  };

  Rating.prototype.update = function(id, value) {
    this.client.update(id, value, () => {
      const widget = document.querySelector(`[data-widget-id="${id}"]`);
      widget.setAttribute('data-rating', value);
    });
  };

  Rating.prototype.rate = function(obj, id) {
    const n = obj.getAttribute('data-stars');
    document.querySelector('.rating').setAttribute('data-rating', n);
    this.update(id, n);
  };

  return {
    Rating,
  };
})();

module.exports.create = client => new ratingsModule.Rating(client);
