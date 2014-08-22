var fs = require('fs');

var Houtarou = function() {};

Houtarou.prototype.default = function() {
    this.read('/../docs/default.md');
};

Houtarou.prototype.version = function() {
    this.read('/../docs/version.md');
};

Houtarou.prototype.help = function() {
    this.read('/../docs/help.md');
};

Houtarou.prototype.read = function(filename) {
    fs.readFile(__dirname + filename, 'utf8', function(err, data) {
        if (err) throw err;
            console.log(data);
    });
};

module.exports = new Houtarou();
