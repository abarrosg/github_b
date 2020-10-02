const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups:ups2020@cluster0.nfhiu.gcp.mongodb.net/upssalesiana?retryWrites=true&w=majority',
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE|| '/',
    filesRoute: process.env.FILES_ROTE || 'file',
}

module.exports = config