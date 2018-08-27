
// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };

$(() => {
	// put jQuery in here


const $container = $('#container');
const $h1 = $('<h1>');
$h1.text('Hogwarts');
$container.append($h1);

	$("<h1>Hogwarts</h1>").appendTo("#container");
	$("<h2>Laurie</h2>").appendTo("#container");
	$("<h3>Gryffindor</h3>").appendTo("#container");
	$("<h4 class='owl'>owlName</h4>").appendTo("#container");
	$("<h4>wandName</h4>").appendTo("#container");
	$("")

});


const $ul = $('<ul>').attr('storage','trunk');
  $('<li>').text('butter beer').appendTo($ul);
  $('<li>').text('invisibility cloak').addClass('secret').appendTo($ul);
  $('<li>').text('magic map').addClass('secret').appendTo($ul);
  $('<li>').text('time turner').addClass('secret').appendTo($ul);
  $('<li>').text('leash').addClass('owl').appendTo($ul);
  $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans').appendTo($ul);
  $container.append($ul);

//   /////////

  const $table = $('<table>');
  const $h5 = $('<h5>').text('Spring 2017');
  const $thead = $('<thead>');

  $('<th>').text('Day').appendTo($thead);
  $('<th>').text('Classes').appendTo($thead);


  $table.append($thead);
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')));
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')));
  $table.append($('<tr>').append($('<td>').text('Wednesday')).append($('<td>').text('History of Magic')));
  $table.append($('<tr>').append($('<td>').text('Thursday')).append($('<td>').text('Charms')));
  $table.append($('<tr>').append($('<td>').text('Friday')).append($('<td>').text('Potions')));
  $container.append($h5).append($table);


  ////////

  const $wand = $('h4:contains("Birch")');
        $wand.detach().appendTo('.owl');
        $wand.text('calcified rainbow beam core with Pachyrhinosaurus tooth inlay').css('color','indigo').addClass('wand');


  $('li:contains("butter beer")').remove();

  $('h4.owl').appendTo($('body'));
  $('h4').eq(0).before($('h4.owl'));


  //////
  $('.secret').hide('slow').delay(1500).show('slow');
  $('li.dog').addClass('cabbage');
  $('li.dog').removeClass('cabbage');



  //////
  const makeBeerForWeek = () => {
	for (let i = 0; i < 7; i++){
		$ul.prepend($('<li>').text('Butter beer'));
		}
	  };
  
	$h5.text('Fall 2018');
	makeBeerForWeek();
	$ul.attr('storage','chest');
  
  });

  ///////