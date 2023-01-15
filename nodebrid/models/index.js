const Sequelize = require('sequelize');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};
const sequelize = new Sequelize(
	config.database, config.username, config.password, config,
)

db.sequelize = sequelize;

fs.readdirSync(__dirname)
	.filter(file => {
		return file.index(".") !== 0 && file !== basename && file.slice(-3) === ".js";
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file));
		console.log(file.model.name);
		db[model.name] = model;
		model.initiate(sequelize);
	});


module.exports = db;

