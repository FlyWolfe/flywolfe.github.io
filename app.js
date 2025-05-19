/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var canvas = document.getElementsByTagName('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;