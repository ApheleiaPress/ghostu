// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://docs.ghost.org/usage/configuration/

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://my-ghost-blog.com',

//         Example mail config
//         Visit http://docs.ghost.org/mail for instructions
//         ```
//          mail: {
//              transport: 'SMTP',
//              options: {
//                  service: 'Mailgun',
//                  auth: {
//                      user: '', // mailgun username
//                      pass: ''  // mailgun password
//                  }
//              }
//          },
//         ```

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://ghosto.herokuapp.com',
        mail: {
            transport: 'SMTP',
              options: {
                  service: 'risto.io',
                  auth: {
                      user: process.env.MAIL_USER,
                      pass: process.env.MAIL_PASSWORD
                  }
              }
        },
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
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.PORT
        },
        fileStorage: false
    }
};

// Export config
module.exports = config;
