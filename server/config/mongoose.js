'use strict';

var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

//Connecting to Database
mongoose.connect('mongodb://localhost/discussion_board');

// create a variable that points to the path where all of the models live
var models_path = path.join(path.resolve('./server/models'));
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});