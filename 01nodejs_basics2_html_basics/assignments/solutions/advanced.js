const fs = require('fs');

const read_file_vertical = (path) => {
    fs.readFile(path, (err, data) => {
        if(err != undefined) {
            console.log("Error reading file");
        } else {
            const str = data.toString();
            for(const i in str) {
                console.log(`${i}: ${str[i]}`)
            }
        }
    })
};

read_file_vertical(process.argv[2]);
