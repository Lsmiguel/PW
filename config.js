require ("dotenv").config();
const mongoose = require("mongoose");


class Database {
    constructor(){
        this._connect();
    }

    _connect() {
        mongoose.connect(process.env.DBURL).then(
        () => {
            console.log('Database connection successful');

        }).catch((err) => {
            console.log("Database connection error");
        });
    }
}

module.exports = new Database();