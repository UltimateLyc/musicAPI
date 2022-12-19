import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Time_specs = sequelize.define('time_specs',{
    id_time_specs: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tempo: {
        type: DataTypes.REAL,
        allowNull: false
    },
    signature: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})