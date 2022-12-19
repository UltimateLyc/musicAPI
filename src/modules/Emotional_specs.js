import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Emotional_specs = sequelize.define('emotional_specs',{
    id_emotional_specs: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    danceability: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    energy: {
        type: DataTypes.REAL,
        allowNull: false
    },
    valance: {
        type: DataTypes.REAL,
        allowNull:false
    }
})