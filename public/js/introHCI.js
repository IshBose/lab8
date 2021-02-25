// 'use strict';

const e = require("express");

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
  
  
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function(){
	$(".judge-img").bind("taphold", tapholdHandler);

		function tapholdHandler(event){
			//id of event source
			var targetIDPrefix = event.target.id;

			console.log("got prefix: " + targetIDPrefix );
			//show bio
			$("#" + targetIDPrefix + "-bio").show();
			}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e){

	//prevent default + reload
	e.preventDefault();
	console.log("submitting form...");
	var rsvpEmail = $('#rsvpEmail').val();
	//send post request
	$.post('addRSVP', {rsvpEmail: rsvpEmail}, postCallback);

  });

  function postCallback(response){
	  alert("RSVP Form successfully submitted!");
	  $('#rsvpEmail').val('');//clear form
  }
}