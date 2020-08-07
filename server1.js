// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.json());
app.use(express.urlencoded())

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

var characters = [{
  'name': "Yoda",
  'role': "Jedi Master",
  'age': 900,
  'forcePoints': 2000
}]
// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

var obi = {
  name: "Obi Wan Kenobi",
  role: "Rey",
  age: 200,
  forcepoints: 2400
}
// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.status(200).json(darthmaul);
});

app.get("/obi", function(req, res) {
  res.status(200).json(obi);
});

app.get('/:character/:var2', (req, res) => {
  var chosen = req.params.character;
  var var2 = req.params.var2;

  console.log(chosen);
  console.log(var2);

  return res.end();
  // res.json();
})


app.get('/app/:character', (req, res) => {
  var chosen = req.param.character;

  console.log(chosen);

  for (var i = 0; i < chosen.length; i++){
    if(chosen === characters[i].name) {
      return res.json(character[i])
    }
  }

  return res.send('No character found');
  // res.json();
})


app.post('api/characters/new', (req, res) => {

  // To use query parames (key, value) in http request
  var chosen = req.query.name;

  // To use /:character
  var chosen2 = req.param.character

  characters.push(req.body);
  console.log(req.body)

  return res.status(200).end()
})


app.get('/view', (req, res) => {
  res.sendFile(path.join(__dirname, 'view.html'))
})

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});