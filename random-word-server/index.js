const jsonServer = require('json-server');
const server = jsonServer.create();
const fs = require('fs');

const fileContents = fs.readFileSync('./data.json', 'utf-8');
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;


server.use(jsonServer.bodyParser);
server.get('/word', (req, res) => {
  const word =
    fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];

  res.json({ word });
});

server.listen(3333, () => {
  console.log('JSON Server is running');
});
