import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Artist = sequelize.define('artist', {
    id_artist: {
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
        allowNull: false,
    },
    year_of_birth: {
        type: DataTypes.DATE,
        allowNull: true
    }
})
