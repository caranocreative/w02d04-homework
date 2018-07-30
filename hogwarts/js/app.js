
// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };

$(() => {
	// put jQuery in here


let $container = $('#container');

	$("<h1>Hogwarts</h1>").appendTo("#container");
	$("<h2>Laurie</h2>").appendTo("#container");
	$("<h3>Gryffindor</h3>").appendTo("#container");
	$("<h4 class='owl'>owlName</h4>").appendTo("#container");
	$("<h4>wandName</h4>").appendTo("#container");

});



