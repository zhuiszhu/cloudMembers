var conObj = {
    http : {
        hostname : "127.0.0.1",
        port : 3000
    },
    db : {
        connect : "localhost",
        port : 27017,
        dbname : "webMessage"
    },
    socket : {
        connect : "localhost",
        port : 8000
    }
}

module.exports = conObj;