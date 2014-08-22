var fs = require('fs');

var Libmin = function() {}; 

Libmin.prototype.default = function() {
    this.read('/../docs/default.md');
};

Libmin.prototype.version = function() {
    this.read('/../docs/version.md');
};

Libmin.prototype.help = function() {
    this.read('/../docs/help.md');
};

Libmin.prototype.read = function(filename) {
    fs.readFile(__dirname + filename, 'utf8', function(err, data) {
        if (err) throw err;
            console.log(data);
    });
};

module.exports = new Libmin();
