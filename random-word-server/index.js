const jsonServer = require('json-server');
const server = jsonServer.create();
const cors = require('cors')
const fs = require('fs');

const fileContents = fs.readFileSync('./data.json', 'utf-8');
const words = JSON.parse(fileContents);
const { fiveLetterWords } = words;


server.use(cors());
server.use(jsonServer.bodyParser);
server.get('/', (req, res) => {
  const word =
    fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];

  res.send(word);
});

server.listen(3030, () => {
  console.log('JSON Server is running');
});
