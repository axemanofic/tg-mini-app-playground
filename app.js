const http = require('http');
const ngrok = require('@ngrok/ngrok');
const path = require('path');


const app = path.join(__dirname, './src', 'index.html')
const html = require('fs').readFileSync(app, 'utf8');
// Create webserver
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(8080, () => console.log('Node.js web server at 8080 is running...'));

// Get your endpoint online
ngrok.connect({ addr: 8080, authtoken_from_env: true, domain: 'enjoyed-drake-working.ngrok-free.app' })
  .then(listener => console.log(`Ingress established at: ${listener.url()}`));
