/*
chatServer.js
Author: David Goedicke (da.goedicke@gmail.com)
Closley based on work from Nikolas Martelaro (nmartelaro@gmail.com) as well as Captain Anonymous (https://codepen.io/anon/pen/PEVYXz) who forked of an original work by Ian Tairea (https://codepen.io/mrtairea/pen/yJapwv)
*/

var express = require('express'); // web server application
var app = express(); // webapp
var http = require('http').Server(app); // connects http library to server
var io = require('socket.io')(http); // connect websocket library to server
var serverPort = 8000;


//---------------------- WEBAPP SERVER SETUP ---------------------------------//
// use express to create the simple webapp
app.use(express.static('public')); // find pages in public directory

// start the server and say what port it is on
http.listen(serverPort, function() {
  console.log('listening on *:%s', serverPort);
});
//----------------------------------------------------------------------------//


//---------------------- WEBSOCKET COMMUNICATION -----------------------------//
// this is the websocket event handler and say if someone connects
// as long as someone is connected, listen for messages
io.on('connect', function(socket) {
  console.log('a new user connected');
  var questionNum = 0; // keep count of question, used for IF condition.
  socket.on('loaded', function() { // we wait until the client has loaded and contacted us that it is ready to go.

    socket.emit('answer', "Hello, I am your aunty bot.  I am house-sitting for your mom and dad and taking care of you!"); //We start with the introduction;
    setTimeout(timedQuestion, 5000, socket, "So my name is aunty-bot, whats yours?"); // Wait a moment and respond with a question.
  });
  socket.on('message', (data) => { // If we get a new message from the client we process it;
    console.log(data);
    questionNum = bot(data, socket, questionNum); // run the bot function with the new message
  });
  socket.on('disconnect', function() { // This function  gets called when the browser window gets closed
    console.log('user disconnected');
  });
});
//--------------------------CHAT BOT FUNCTION-------------------------------//
function bot(data, socket, questionNum) {
  var input = data; // This is generally really terrible from a security point of view ToDo avoid code injection
  var answer;
  var question;
  var waitTime;
  var program;

  /// These are the main statments that make up the conversation.
  if (questionNum == 0) {
    answer = 'Hello ' + input + '!, I told your mom '+ input +'bot is a better name but I guess they know best :-/'; // output response
    waitTime = 5000;
    question = 'How old are you?'; // load next question
  } 
  else if (questionNum == 1) {
    answer = 'Really, ' + input + ' years old? I remember when you were a little baby barfing on everybody!'; // output response
    waitTime = 5000;
    question = 'So what you upto at this late hour? Are you heading out?'; // load next question
  } 
  else if (questionNum == 2) {
    if (input.toLowerCase() === 'no'||input === 0){
      answer = 'Perfect! Now head back upstairs and aunty will make her famous chicken soup for you! Yum Yum!';
      waitTime = 5000;
      question = 'Do you have to go to school tomorrow?';
      }
    else {
      answer = 'Oh child! this late in the night';
      waitTime = 5000;
      question = 'Do you have to go to school tomorrow?';
      } 
  } 
  else if (questionNum == 3) {
    if (input.toLowerCase() === 'no'||input === 0){
      answer = 'Gosh! you would think with the amount you are paying they would atleast teach something!';
      waitTime = 5000;
      question = 'What time do you have to be out tomorrow then?';
      }
    else if (input.toLowerCase === 'yes'|| input ===1){
      answer = 'Ok, make sure you have done your readings!';
      waitTime = 5000;
      question = 'What time do you have to go?';
      } 
  } 
  else if (questionNum == 4) {
    answer = 'Sounds good! I will wake you up 2 hours before ' + input + '!';
    waitTime = 5000;
    question = 'Whats your friends name? The one who picks you up for school in the morning';
  }
  else {
    answer = 'Tell ' + input + ', that i am house-sitting for your mom and dad, and that he should drop his contact details on the kitchen counter on his way out';
    waitTime = 50000;
 
  }
 /// We take the changed data and distribute it across the required objects.
  socket.emit('answer', answer);
  setTimeout(timedQuestion, waitTime, socket, question);
  return (questionNum + 1);
}

function timedQuestion(socket, question) {
  if (question != '') {
    socket.emit('question', question);
  } else {
    //console.log('No Question send!');
  }

}  
  
