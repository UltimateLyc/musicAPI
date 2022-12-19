import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Mode = sequelize.define('mode',{
    id_mode:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})