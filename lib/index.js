var libmin = require('./libmin'),
    verify = require('./cli').verify;

if (verify(['-v', '--version']))
    libmin.version();

else if (verify(['-h', '--help']))
    libmin.help();

else libmin.default();
