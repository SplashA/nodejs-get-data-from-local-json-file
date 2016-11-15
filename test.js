const fs = require('fs');
fs.readFile('test.json', 'utf-8', function (err,data) {
    if (err) {
            return console.log(err);
    }
    const result = JSON.parse(data);
    global['resultParsed'] = result['stringTest'];
    console.log(resultParsed);
    return resultParsed;
});

