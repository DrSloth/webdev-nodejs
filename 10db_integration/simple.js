const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'dsc_test',
    password: '',
    database: 'dsc_test',
    connectionLimit: 5,
    port: 3306,
});

const main = async () => {
    console.log('start');
    let con;
    try {
        con = await pool.getConnection();
        const rows = await con.query("SELECT * from users;");
        for (const row of rows) {
            console.log(row);
        }
        //console.log(rows)
    } catch (err) {
        throw err;
    } finally {
        if (con) return con.end();
    }
};

main();
