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
	return output;
}
function makeParagraph(domObj) {
	'use strict';
	var i,input = domObj.value.trim(),output = '', paragraph = '',flag = false;
	for (i=0;i<20;i+=1) {
		paragraph += input + ' ';
	}
	paragraph.trim();
	for (i=0;i<4;i+=1) {
		if (flag === false)
		{
			output += '<p class = \'decorate\'>' + paragraph + '</p>';
			flag = true;
		}
		else
		{
			output += '<p>' + paragraph + '</p>';
			flag = false;
		}
	}
	return output;
}
$(document).ready(function () {
	'use strict';
	$('#first').click(function () {
		$('#userVal').val(reverse(document.getElementById('userVal')));
	});
	$('#second').click(function () {
		$('#formControls').after(makeParagraph(document.getElementById('userVal')));
	});
	$('#first').text("Reverse");
	$('#second').text("Generator");
	$('#headerTitle').text("Final Exam Review");
	$('#headerSubTitle').text("Sample Text: ");
	$("footer>h4").html("By: Cameron VanHouzen<br />Date: " + new Date().toUTCString());
	$("aside").slideUp();
});
