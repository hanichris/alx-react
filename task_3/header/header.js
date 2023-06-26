const $ = require('jquery');
require('./header.css');

$(() => {
  $('body').html(`
  <div id='logo'></div>
  <h1>Holberton Dashboard</h1>
  `);
  console.log('Init header');
});