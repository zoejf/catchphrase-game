$(function() {
    console.log( "ready!" );

    var count = 0;

	$(document).keypress(function(event) {
		var pressedKey = String.fromCharCode(event.which);
		console.log("you pressed", pressedKey);
		if (count < 10) {
			if (pressedKey == "f" || pressedKey == "j") {
				count = count + 2;
				console.log ("FJ! count = ", count);
			}
		} else if (count >=10) {
			$('.carmen-avatar').animate({left: '+=120'}, 200);
		}
	});

});