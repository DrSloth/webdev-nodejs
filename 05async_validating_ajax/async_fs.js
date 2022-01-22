// Node js provides an async fs api
const fs = require('fs').promises;

// This example is very similiar to something we had in the last lessons parsing_forms.js 
const main = async () => {
    try {
        const data = await fs.readFile('./ASYNC.md');
        await fs.mkdir('./users', {recursive: true});
        await fs.writeFile('./users/haha.js', data);
    } catch(e) {
        console.log(`An error occured: ${e}`)
    }
}
