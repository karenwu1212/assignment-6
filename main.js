var url = 'http://api.bing.net/qson.aspx?Query=';
var endUrl = '&JsonType=callback&JsonCallback=?';
var userInput = $('input').val();

$('input').on('keyup',function(evt) {
	$.ajax({
		url: url + userInput + endUrl,
		type: 'GET',
		dataType: 'jsonp',
	}).done(function(response){
		var results = response.SearchSuggestion.Section;
		$.each(results, function(i, value){
			var html = $('<a>' + value.Text + '</a>');
			$('body').append(html);
			window.open('www.bing.com/search?q=' + userInput.Text);
	
		})
	})
})





	

		









