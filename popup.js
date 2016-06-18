/*
** popup.js
** ---------------------------------------------------------------
** Description: The logic behind the browser action for TabBuckets
** Author: Clay Hausen
** Creation Date: 11/28/15
** ---------------------------------------------------------------
*/

/*
** Get the URLs for all tabs in the current window.
**
** @param {function(string)} callback - Called when the URLs for all tabs in the
**   current window have been found and stored in an array
*/
function getTabUrls(callback) {
    // only query tabs in the current windows
    var queryInfo = {
	currentWindow: true
    };

    // populate a new array using the URLs of the tabs in the queried array
    chrome.tabs.query(queryInfo, function(tabs) {
	var tabUrls = []
	tabs.forEach(function(currentValue, index, tabs) {
	    tabUrls.push(currentValue.url);
	    console.log("URL" + index + " " + tabUrls[index]);
	});

	// return the array of tab URLs
	callback(tabUrls);
    });
}

/*
** Determine if a duplicate key name exists in chrome local storage
**
** @param {string} name - Key to check against local storage for duplicates
** @param {function(string)} callback - Called when name matches a key in local storage
**   (returns the key), or fails to match any of them (returns null).
*/
function checkForDuplicateName(name, callback) {
    // Retrieve all key names in local storage
    chrome.storage.sync.get(null, function(allValues) {
	var allKeys = Object.keys(allValues);
	for (var i = 0; i < allKeys.length(); ++i) {
	    if (name == allKeys[i]) {
		callback(allKeys[i]);
	    }
	}
	callback(null);
    });
}

// Create event listener for the "Save Tabs" button
$(document).ready(function() {
    $( "#save" ).click( function(event) {

	console.log("You clicked save!");
	
	var bucketName = prompt("Please enter the name for your Bucket", "New Bucket");
	
	if (!bucketName) {
            console.log('Error: Please enter a name for your bucket.');
            return;
	}
	
	getTabUrls(function(tabUrls) {
	    
	});

	// while there exists a bucketName that matches the desired bucketName
	// in chrome local storage, append integer i to bucketName
	/*
	  var i = 0;
	  while (checkForDuplicateName(bucketName, function() {
	  bucketName = bucketName + i;
	  ++i;
	  })				
	*/
    });   
});


// Create event listener for the "Load Tabs" button
// $( "#load" ).on("click",

// Create event listener for the "Clear Tabs" button
// var clearButton = $( "#clear" );

// Create event listener for the "Help" button
// var helpButton = $( "#help" );

