const $ = require('jquery');
// const image = require('../assets/holberton-logo.jpg');
require('./header.css');

$(() => {
  $('body').html(`
  <div id='logo'></div>
  <h1>Holberton Dashboard</h1>
  `);
  console.log('Init header');
});