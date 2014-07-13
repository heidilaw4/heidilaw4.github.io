/** DIVS FOR SQUARES **/
$("p").append("<p>this!</p>");

/** BUTTONS **/

$('.gohex').on('click', function(){
	$('.hex').show();
	$('.square').hide();
})

$('.gosquare').on('click', function(){
	$('.hex').hide();
	$('.square').show();
})

$('.buttons a:not(:last)').on('click', function(){
	$('.transition').fadeIn('slow').delay(300)
	$(this).on('mousemove', function(){$('.transition').fadeOut('fast');})
})

$('.buttons .textinput').on('click', function(){
	var input=prompt("What message would you like to display?");
	$('.text').text(input);
})

/** CHANGING COLOURS **/ 
var colourCounter = 0;
var colourPalette = [ 
    'rgb(255, 154, 0)',
    'rgb(255, 198, 0)',
    'rgb(255, 89, 0)',
    'rgb(255, 209, 0)',
    'rgb(255, 252, 0)',
    'rgb(255, 167, 0)']
//colour for yellow/orange: colours for the squares and the hex background-color

var colourPalette2 = [	
	'rgb(5, 24, 84)',
	'rgb(5, 51, 84)',
	'rgb(7, 32, 115)',
	'rgb(48, 34, 69)',
	'rgb(44, 30, 107)',
	'rgb(5, 24, 84)',
	'rgb(5, 51, 84)',
	'rgb(7, 32, 115)',
	'rgb(48, 34, 69)',
]
//colour for blue: colours for the hexagons

/** HEXAGONS **/
$(function(){ 
	$('.transition').fadeIn('slow').delay(300)
	$(this).on('mousemove', function(){$('.transition').fadeOut('fast');})

	$('body').on('mousemove', function () {
		// Set the background, looping through the colour using a colour.
	    idx = colourCounter % colourPalette.length
	    $('.hex .top').css('border-bottom-color', colourPalette2[idx])
		$('.hex .middle').css('background-color', colourPalette2[idx])
		$('.hex .bottom').css('border-top-color', colourPalette2[idx])
	    $(this).css('background-color', colourPalette[idx]);
	    colourCounter++;
	})

/** SQUARES **/
	$('.boxes').each(function(i, elem){ 
	// for each box loop through the colourPallette, and  provide set the 
	// background to the next colour. So cool! 
		idx = i % colourPalette2.length
		$(elem).css('background-color', colourPalette2[idx])
	})

	$('body').on('mousemove','.boxes', function(e){
		colour = $(this).css('background-color')
		next = (colourPalette.indexOf(colour) + 1) % colourPalette.length 
		$(this).css('background-color', colourPalette[next])
	})

})


