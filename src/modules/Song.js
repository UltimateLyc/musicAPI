import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Song = sequelize.define('song', {
    id_somg: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    popularity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
