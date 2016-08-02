/*
	Article Search API: 74c86f1c937b422eb4d6cda12de80cd7
*/

// Built by LucyBot. www.lucybot.com
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
var apiKey = "74c86f1c937b422eb4d6cda12de80cd7"

		$.ajax({
		  url: queryURL + apiKey,
		  method: 'GET',
		}).done(function(result) {
		  
		console.log(result);
		
		for (var i=0; i<result.response.docs.length/2;i++){

 			
 			var articles = $("<div>");
					articles.addClass('articles');
					
			var title = $("<h1>");
				title.text((i+1) + results.docs[i].headline.main)

			var byline = $("<h2>");
				byline.text(results.docs[i].byline.original)

			var link = $("<link");
				link.attr("href", results.docs[i].web_url) 
				link.text(results.docs[i].web_url) 

				console.log(title)
				console.log(byline)
				console.log(link)


			$('#results').append(articles);

		}
	});


// 		for (var i=0; i<numberArticles; i++) {

					
					
