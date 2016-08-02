/*
	Article Search API: 74c86f1c937b422eb4d6cda12de80cd7
*/

// Built by LucyBot. www.lucybot.com
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
var apiKey = "74c86f1c937b422eb4d6cda12de80cd7"


$.ajax({
  url: queryURL+apiKey,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});