const db = require('./database');

const main = async () => {
    const users = await db.get_all_users();
    /* for(const row of users) {
        console.log(row);
    } */
    console.log(users);
};

main();
