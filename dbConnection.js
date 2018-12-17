const mysql = require('promise-mysql');

const dbConfig = {
	user: "saif",
	password: "nodejs2018",
	databse: "todo_dev",
	host: "localhost",
	connectionLimit: 10
}

module.exports = async () => {
	try {
		let pool;
		let con;
		if (pool) con = pool.getConnection();
		else {
			pool = await mysql.createPool(dbConfig);
			con = pool.getConnection();
		}
		return con;
	} catch (ex) {
		throw ex;
	}
}

