//Script file for CIT190 Review
function reverse(domObj) {
	'use strict';
	var input = domObj.value.trim(),
	output = '',
	i,
	x;
	for (i=1;i < input.length + 1;i+=1) {
		x = input[input.length - i];
		if (x ==='undefined')
		{
			output += '#';
		}
		output += x;
	}
	document.getElementById('userVal').value = output;
}
function makeParagraph(domObj) {
	var i,x,input = domObj.value.trim(),output = '', paragraph = '';
	for (i=0;i<20;i+=1) {
		paragraph += input;
	}
	for (i=0;i<4;i+=1) {
		output += '<p>' + paragraph + '</p>';
	}
	return output;
}
$(document).ready(function () {
	'use strict';
	$('#first').click(function () {
		reverse(document.getElementById('userVal'));
	});
	$('#second').click(function () {
		$('#formControls').after(makeParagraph(document.getElementById('userVal')));
	});
});
