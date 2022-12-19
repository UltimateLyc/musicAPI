import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Album = sequelize.define('album', {
    id_album: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

