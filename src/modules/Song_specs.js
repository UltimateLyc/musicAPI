import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Song_specs = sequelize.define('song_specs', {
    id_song_specs: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})
