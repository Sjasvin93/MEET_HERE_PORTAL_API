require('dotenv').config()
    module.exports = {
    development: {
        client: 'pg',
        connection: `postgres://postgres:Jasvin@1993@localhost:5432/meet_here`,
        migrations: {
        directory: './src/appDB/migrations/',
        },
        seeds: {
        directory: './src/appDB/seeds/',
        },
    },
    };