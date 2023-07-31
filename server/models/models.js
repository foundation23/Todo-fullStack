import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const Todo = sequelize.define('todo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    creation: {type: DataTypes.DATE, allowNull: false},
    ending: {type: DataTypes.DATE, allowNull: false},
    created: {type: DataTypes.BOOLEAN}
})

export const List = sequelize.define('list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
})

List.hasMany(Todo)
Todo.belongsTo(List)
