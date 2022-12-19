import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Song_artist = sequelize.define('song_artist',{
    id_song_artist: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})