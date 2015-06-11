var currentlyClicked_Btn;
var lastlyClicked_Btn;
var indicator_iconType = "collapsed";
var textDescriptionDisplayed = "false";

$("#CALCULATOR_TITLE").click(function () {
	// Change the indicator image
	// TODO: REMEMBER TO ADD CREDIT TO GLYPHICONS.com********************
	if (indicator_iconType === "collapsed")	{
		$("#INDICATOR_ICON").attr("src", "image/glyphicons-602-chevron-down.png");
		indicator_iconType = "expanded";

		// 
		$("#EXPAND_NOTE").css({"opacity": "0", "transition": "opacity 0.5s"});

	}
	else {
		$("#INDICATOR_ICON").attr("src", "image/glyphicons-601-chevron-up.png");
		indicator_iconType = "collapsed";

		// Reset textDescription border box
    	removeBorder();
    	textDescriptionDisplayed = "false";

		// 
		$("#EXPAND_NOTE").css({"opacity": "1", "transition": "opacity 0.5s"});
	}

	// Toggle the calculator interface
	$("#INTERFACE_CONTAINER").slideToggle("slow");

	// Scroll to SUPPORT_TITLE
	$("html, body").animate({
        scrollTop: $("#SUPPORT_TITLE").offset().top
    }, 500, function () {
    	// Reset the Help page to be displayed
    	$("#HELP_PAGE").show("slow");

    	$(".CALCULATOR_INTERFACE, #LINE_BREAK_VERT").css("display", "inline");

    	// Reset Opacity
    	$(".OP_BTN, .NUM_BTN").css({"opacity": "1", "transition": "opacity 0.5s"});

    	// Reset Clicked Button
    	currentlyClicked_Btn = undefined;
    	lastlyClicked_Btn = undefined;
    });
	
});

$("#DISMISS_BTN").click(function () {
	$("#HELP_PAGE").slideToggle("slow");

	// Initialize the operator button's opacity
	$(".OP_BTN, .NUM_BTN").css({"opacity": "0.5", "transition": "opacity 0.5s"});
	if (currentlyClicked_Btn) {
			currentlyClicked_Btn.css({"opacity": "1", "transition": "opacity 0.5s"});
	}
});

$("#DISMISS_BTN").on ({
	mouseenter: function ()
	{
		$(this).css({"opacity": "0.5", "transition": "opacity 0.5s"});
	}, 
	mouseleave: function ()
	{
		$(this).css({"opacity": "1", "transition": "opacity 0.5s"});
	}

});

$(".OP_BTN, .NUM_BTN").click(function () {
	// Reset all other Buttons' opacity to default
	$(".OP_BTN, .NUM_BTN").css({"opacity": "0.5", "transition": "opacity 0.5s"});

	// Set opacity of selected operator button
	$(this).css({"opacity": "1", "transition": "opacity 0.75s"});
	lastlyClicked_Btn = currentlyClicked_Btn;
	currentlyClicked_Btn = $(this);

	// Display description of selected operator button
	if (textDescriptionDisplayed === "false") {
		textDescriptionDisplayed = "true";
		displayBorder();
	}

	// Display the description info of the button if new button is pressed
	if (lastlyClicked_Btn !== currentlyClicked_Btn)	{
		displayDescription();	
	}
	
});

$(".OP_BTN, .NUM_BTN").on (
{
	mouseenter: function ()
	{
		// Reset all other Buttons' opacity to default
		$(".OP_BTN, .NUM_BTN").css({"opacity": "0.5", "transition": "opacity 0.5s"});
		if (currentlyClicked_Btn) {
			currentlyClicked_Btn.css({"opacity": "1", "transition": "opacity 0.5s"});
		}
			
		$(this).css({"opacity": "1", "transition": "opacity 0.5s"});
	},
	mouseleave: function ()
	{
		$(this).css({"opacity": "0.5", "transition": "opacity 0.5s"});
		if (currentlyClicked_Btn) {
			currentlyClicked_Btn.css({"opacity": "1", "transition": "opacity 0.5s"});
		}
	}

});

$(document).ready(function () {
	// Display calculator mock-up image and appstore icon
	$("#MOCKUP, #APPSTORE").fadeIn(1000);
	$("#MOCKUP, #APPSTORE").css("display", "block");
});

function displayDescription() {
	var currentOp = currentlyClicked_Btn.text();

	$("#TEXT_TITLE").html("< " + data[currentOp].title + " >" + " Operator");
	$("#TEXT_ALT").html(data[currentOp].alternative);
	$("#TEXT_DESC").html(data[currentOp].description);
	$("#TEXT_EX").html(data[currentOp].example);
}

function displayBorder() {
	$("#ROUND_BORDER, #SQUARE_BORDER").fadeIn(500);
}

function removeBorder() {
	$("#ROUND_BORDER, #SQUARE_BORDER").fadeOut(300);
}

