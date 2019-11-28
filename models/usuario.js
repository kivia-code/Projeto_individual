'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idPessoa: {
			field: 'idPessoa',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome_completo: {
			field: 'nome_completo',
			type: DataTypes.STRING,
			allowNull: true
		},
		email_usuario: {
			field: 'email_usuario',
			type: DataTypes.STRING,
			allowNull: true
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull:false
		}
		,
		confsenha: {
			field: 'confsenha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Pessoa', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
