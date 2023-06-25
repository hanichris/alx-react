const $ = require('jquery');
const _ = require('lodash');
require('./body.css');

$(() => {
  let count = 0;
  $('body').append('<button>Click here to get started</button>');
  $('body').append(`<p id='count'></p>`);

  $('button').on('click', _.debounce(updateCounter));

  function updateCounter() {
    $('p#count').text(`${++count} clicks on the button`);
  }
});