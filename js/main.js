/* alert($); */

// THis is a comment format too for javascript only //

function askQuestions () {




	//we are going to ask loads of annoying questions to the user just to be a pain

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	// the ' ' is the space between the two names

	$('h2').text('Hello' + ' ' + fullName);

	//should update to say hi to you



	//if the users first name is general and the last name is not assembly, then greet the general


	if (fullName =='General Assembly') {

		console.log('booo');
	}

	else if (firstName =='General' && lastName != 'Assembly') {

		console.log('Hello General');
	}

	else {

		console.log('booo');
	}


	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);
	// gets a number out of the response

	if (userAge>= 18) {

		console.log('User is an adult.');
	}

	else if (userAge>=13) {

		console.log('User is a teenager.');
	}

	else {

		console.log('User is a baby.');
	}


	//find out their favourite colour and then change part of the page to that colour
	var faveColor = prompt ('What is your favourite colour?').toLowerCase();

	if (faveColor == 'red' ||
		faveColor == 'blue' ||
		faveColor == 'green' ||
		faveColor == 'yellow' ||
		faveColor == 'pink') {

		$('h2').css('color',faveColor);
	}

}

//when the page loads, when the user clicks an h3 heading, show or hide the next element - basically what this code will do //

//because javascript can load before we finishing loading, that is why the first part of the code needs to have the bit on when the page finishes loading//

//step 1// //need the $ so that it picks up jquery rather than standard javascropt////function bit means do the stuff between the brackets//

$(function() {

	// when the user clicks on the pic, it will ask all these qs

	$('img').on('click',askQuestions);

	// when the page loads - hide all the sections already - inreality - hide in css and use javascript to open it but have an initial line to make syre that they have javascript and if not use css to do it - gets rid of initial issue with javascript being run last on a slow system//
	$('h3').next().hide();

		//step 2 - get the h3 elements on the page////listen out for the user clicking on them (could be scroll or hover or whatever), then do....//

		$('h3').on('click',function() {

			//step 3 - hide or show the next element////this in javascript is versatile and changes its meaning based on whatever you want it to do...//
			$(this).next().slideToggle(5000);
// was hide before - someone has made the if statement to switch it over - and named it toggle!!!slideToggle is an animated one - in this one T is capital as you cant use spaces - so the next word starts with a capital (called camel casing)//
//5000 is the time in seconds for the animation//

		})



});