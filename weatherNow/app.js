var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Abu+Dhabi,ae&appid=4cd771c088e7ca081c003d7deb24fb33&units=metric&img/w';
//UAE does not have any ZipCode
var server = http.createServer(function(request, response){
// All logic will go here.
	var request = require('request');
	request(url,function(err,res, body){
		var data = JSON.parse(body);
		response.write("<html><body><div id='container'>");
		response.write("<h1>"+ 'City Name :' + data['name'] + '<br>' + "</h1>");
		response.write("<h2><strong>Description</strong>: "+ data.weather[0].description +"</h2>");
		response.write("<h2>"+ 'Temperature :' + data.main['temp'] + ' Celsius' + '<br>' + "</h2>");
		response.write("<h2>"+ 'Humidity :' + data.main['humidity'] + ' %'+ '<br>' + "</h2>");
		response.write("<h2>"+ 'Wind :' + data.wind['speed'] + ' meter/sec' + "</h2>");
		response.write("</div></body></html>");	
		response.end();
	});

	

}).listen(3000);


//testing api if it is working: the project not completed!