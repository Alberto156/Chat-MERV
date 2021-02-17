const config = {
    dbUrl: process.env.DB_URL || 'mongodb://127.0.0.1:27017/ChatMERN',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files',
    tokenExpire : process.env.TOKEN_EXPIRE = '48h',
    SeedAutentication : process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo'
};

module.exports = config;