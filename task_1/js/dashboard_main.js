const $ = require('jquery');
const _ = require('lodash');

$(() => {
  let count = 0;

  $('body').html(`
  <p>Holberton Dashboard</p>
  <p>Dashboard data for the students</p>
  <button>Click here to get started</button>
  <p id='count'></p>
  <p>Copyright - Holberton School</p>
  `);

  $('button').on('click', _.debounce(updateCounter));

  function updateCounter() {
    $('p#count').text(`${++count} clicks on the button`);
  }

});