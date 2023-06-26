const $ = require('jquery');
require('./body.css');

$(() => {
  let count = 0;
  $('body').append('<button>Click here to get started</button>');
  $('body').append(`<p id='count'></p>`);

  import('lodash/debounce')
    .then(({ default: debounce }) => {
      $('button').on('click', debounce(updateCounter));
      
      function updateCounter() {
        $('p#count').text(`${++count} clicks on the button`);
      }
    })
    .catch((err) => console.log(err.message));
});