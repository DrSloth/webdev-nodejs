const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'dsc_test',
    password: '',
    database: 'dsc_test',
    connectionLimit: 5,
    port: 3306,
});

const get_db_connection = async () => {
    try {
        const con = await pool.getConnection();
        return con;
    } catch (err) {
        throw err;
    }
}

const get_all_users = async () => {
    let con;
    try {
        con = await get_db_connection();
        const rows = await con.query("SELECT * from users;");
        delete rows.meta;
        return rows;
    } finally {
        con.end();
    }
}

const add_user = async (user) => {
    let con;
    try {
        con = await get_db_connection();
        await con.query("INSERT INTO users(name, age) VALUES(?,?)", [user.name, user.age]);
        const rows = await con.query("SELECT * from users;");
        delete rows.meta;
        return rows;
    } finally {
        con.end();
    }
};

module.exports = {get_all_users, add_user};
