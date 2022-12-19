import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Tonality_specs = sequelize('tonality_specs',{
    id_tonality_specs: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    popularity:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
