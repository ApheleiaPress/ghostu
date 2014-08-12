// # Ghost Configuration

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        url: 'http://ghost.blog',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // ### Production
    production: {
        url: process.env.PRODUCTION_URL,
        mail: {},
        database: {
            client: 'pg',
            connection: {
                host: process.env.POSTGRES_HOST,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                port: '5432'
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        },
        fileStorage: false
    }
};

// Export config
module.exports = config;
