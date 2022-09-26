import { DataTypes, Model } from 'sequelize';
const db = require('../db');

class Vote extends Model { }

Vote.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    candidate: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    party: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'votes',
    modelName: 'Vote'
});

module.exports = Vote;