var deepFreeze = require('deep-freeze'),
    path       = require('path'),

    env = process.env,
    config;

config = {
    env          : 'development',
    isDevelopment: env.NODE_ENV !== 'production',
    isProduction : env.NODE_ENV === 'production',

    database: 'postgres://postgres:wave@localhost:5432/open-marriage',
    port    : env.PORT || 5000,

    session: {
        key   : 'le.session',
        secret: 'wave',

        cookie: {
            maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week
        }
    },

    invitationSecret: 'wave',

    mailgun: {
        endpint: 'https://api.mailgun.net/v3' && ('https://api.mailgun.net/v3' + '/'),
        domain : 'sandbox3c2d919b938944358cd6ec4b5b9865c2.mailgun.org',
        secret : 'key-7a878c619f05b5bd0d5902fddd39bd8d'
    },

    email: {
        from: 'Person A and Person B <andrewjhinger@gmail.com>'
    },

    dirs: {
        pub     : path.resolve('public/'),
        views   : path.resolve('views/pages/'),
        layouts : path.resolve('views/layouts/'),
        partials: path.resolve('views/partials/'),
        emails  : path.resolve('views/emails/')
    },

    date: new Date('Sat July 11 2015 4:30:00 GMT-0700 (PDT)'),
    dateOver: new Date('Sat July 11 2016 11:00:00 GMT-0700 (PDT)'),

    version: require('../package').version,

    pictos : env.PICTOS,
    typekit: env.TYPEKIT,
    yui    : require('./yui')
};

module.exports = deepFreeze(config);
