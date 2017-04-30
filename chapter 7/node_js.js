var http = require('http');

var app = http.createServer(function (req,res) {
  console.log('Starting Server...');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  setTimeout(function () {res.end(<h1>Hello_world</h1><span>Chihengwang</span>);}, 500);
  console.log('Written To Server');
});

// e.g. kill
process.on('SIGTERM', function() {
  console.log('Closing Gracefully');
  app.close();
  process.exit();
});

//e.g. Ctrl + C 
process.on('SIGINT', function() {
  console.log('Closing Gracefully');
  app.close();
  process.exit();
});

app.listen(5000);