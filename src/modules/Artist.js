import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Album } from './Album .js'

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


Artist.hasMany(Album,{
    foreignKey: 'id_artist',
    sourceKey: 'id_artist' // source => origen
})

Album.belongsTo(Artist,{
    foreignKey: 'id_artist',
    target: 'id_artist'
})