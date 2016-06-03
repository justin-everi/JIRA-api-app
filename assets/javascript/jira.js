

	// Initial array of issues
	var issues = [];

	// ========================================================

	// displayIssueInfo function now re-renders the HTML to display the appropriate content. 
	function displayIssueInfo(){
		var issue = $(this).attr('data-name');
		console.log(issue);
		//var user = $('#user-input').val().trim();
		//var pass = $('#pass-input').val().trim();
		//var queryURL = "http://jira/rest/api/2/search?jql=project=GP+order+by+duedate&fields=id,key";
		//var url = "http://jira/rest/api/2/issue/" + issue;
		var queryURL = "http://jira/rest/api/2/issue/" + issue;
		console.log(queryURL);
		// Creates AJAX call for the specific issue being 
		$.ajax({url: queryURL,method: 'GET'}).done(function(response) {

			// Creates a generic div to hold the issue
			var issueDiv = $('<div class="issue">');
			var issueDiv = $('<div>').attr('class','issue');
			console.log(response);
			// Retrieves the Rating Data
			//var rating = response.Rated;

			// Creates an element to have the rating displayed
			//var pOne = $('<p>').text( "Rating: " + rating);

			// Displays the rrating
			//issueDiv.append(pOne);

			// Retrieves the release year
			//var released = response.Released;

			// Creates an element to hold the release year
			//var pTwo = $('<p>').text( "Released: " + released);

			// Displays the release year
			//issueDiv.append(pTwo);

			// Retrieves the plot
			//var plot = response.Plot;

			// Creates an element to hold the plot
			//var pThree = $('<p>').text( "Plot: " + plot);

			// Appends the plot
			//issueDiv.append(pThree);

			// Creates an element to hold the image 
			//var image = $('<img>').attr("src", response.Poster);

			// Appends the image
			//issueDiv.append(image);

			// Puts the entire issue above the previous issues.
			//$('#issuesView').prepend(issueDiv);
		});

	}

	// ========================================================

	// Generic function for displaying issue data 
	function renderButtons(){ 

		// Deletes the issues prior to adding new issues (this is necessary otherwise you will have repeat buttons)
		$('#buttonsView').empty();

		// Loops through the array of issues
		for (var i = 0; i < issues.length; i++){

			// Then dynamicaly generates buttons for each issue in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('issue'); // Added a class 
		    a.attr('data-name', issues[i]); // Added a data-attribute
		    a.text(issues[i]); // Provided the initial button text
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addIssue').on('click', function(){

		// This line of code will grab the input from the textbox
		var issue = $('#issue-input').val().trim();

		// The issue from the textbox is then added to our array
		issues.push(issue);
		
		// Our array then runs which handles the processing of our issue array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	// ========================================================

	// Generic function for displaying the issueInfo
	$(document).on('click', '.issue', displayIssueInfo);


	// ========================================================

	// This calls the renderButtons() function
	renderButtons();

