var houtarou = require('./houtarou'),
    verify = require('./cli').verify;

if (verify(['-v', '--version']))
    houtarou.version();

else if (verify(['-h', '--help']))
    houtarou.help();

else houtarou.default();
