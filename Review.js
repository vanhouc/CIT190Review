//Script file for CIT190 Review
$(document).ready(function() {
	'use strict'
	$('#first').click(function(){
		reverse();
	});
});
function reverse() {
	var input = document.getElementById('userVal').value.trim();
	var output = '';
	for (var i=1;i < input.length + 1;i++) {
		var x = input[input.length - i]
		if (x ==='undefined')
		{
			output += '#'
		}
		output += x;
	}
	document.getElementById('userVal').value = output;
}