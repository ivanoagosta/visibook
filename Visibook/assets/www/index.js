// Action group

function search() {

	window.localStorage.setItem("search", $('#search').val());   	// save search value in local place
	
	document.location.href="searchResults.html";                    // result page

}


function book() {
	$.mobile.changePage("books.html");
}

