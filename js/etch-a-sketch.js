var square_number = 16;

function renderSquares() {
    var square_test = ((512 - (square_number * 2)) / square_number);
    for (var i = 0; i < square_number ** 2; i++) {
	    $('#window').append("<div class='testing' style='width: " + square_test
	    + "px; height: " + square_test + "px;'></div>")
    }
    $(".testing").mouseenter(function() {
        $(this).css('background-color', 'blue');
    });
}


$(document).ready(function() {
    renderSquares();
});

$("#reset").click(function() {
    $(".testing").remove();
    square_number = prompt("How many squares per side do you want on the grid?")
    renderSquares();
});
