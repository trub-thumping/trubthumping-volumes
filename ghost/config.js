// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'https://trubthumping.com',
        mail: {

        },
        database: {
            client: 'mysql',
            connection: {
                host     : process.env.MYSQL_PORT_3306_TCP_ADDR,
                port     : process.env.MYSQL_PORT_3306_TCP_PORT,
                user     : 'ghost',
                password : process.env.GHOST_DATABASE_PASSWORD,
                database : 'ghost',
                charset  : 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        }
    },
};

module.exports = config;
