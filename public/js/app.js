/*
* ------------ *
* Setup Canvas *
* ------------ *
*/

var canvas = document.getElementById("speech_canvas");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

canvas.setAttribute("width", 0.9*windowWidth);
canvas.setAttribute("height", 0.5*windowHeight);

var ctx = canvas.getContext('2d');

/* -------------------------------------------------- */

/* -------------------------------------------------- */

function displayTextOnCanvas(text, context, x, y, options){
  // Get style from options json
  let color = options['color'] || "#000000";
  let font = options['font'] ||"30px Arial";
  let textAlign = options['textAlign'] || "center";

  // Set style
  context.fillStyle = color;
  context.font = font;

  // Draw the text to the canvas
  context.fillText(text, x, y);
}

/* -------------------------------------------------- */