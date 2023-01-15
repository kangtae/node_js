const Sequelize = require("sequelize");

class User extends Sequelize.Model {
	static initiate(sequelize){
		User.init({
			email: {
				type: Sequelize.STRING(40),
				allowNull: true,
				unique: true,
			},
			nick: {
				type: Sequelize.STRING(15),
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING(100),
				allowNull: ture,
			},
			provider: {
				type  : Sequelize.ENUM('local', 'kakao'),
				allowNull: false,
				defaultValue: 'local'
			},
			snsId: {
				type: Sequelize.STRING(30),
				allowNull: true,
			}
		},{
			sequelize,
			timestamps: true,
			underscored: false,
			modelName: "User",
			tableName: "users",
			paranoid: true,
			charset: "utf8mb4",
			collate: 'utf8_general_ci'
		})
	}
	
	static associate(db){}
	
}

module.exports = User;



