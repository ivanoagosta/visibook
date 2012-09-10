// Action group

function search() {

	window.localStorage.setItem("search", $('#search').val());   // save search value
	
	$.mobile.changePage("searchResults.html", {reloadPage: true});
}

function book() {
	$.mobile.changePage("books.html");
}


