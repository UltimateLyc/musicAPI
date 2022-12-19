import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Key = sequelize.define('key',{
    id_key: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
