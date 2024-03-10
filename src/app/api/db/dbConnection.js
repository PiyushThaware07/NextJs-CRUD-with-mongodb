const { DATABASE_URL, DATABASE_NAME } = process.env;

const dbConnectionString = `${DATABASE_URL}/${DATABASE_NAME}`;

const mongoose = require("mongoose");

mongoose.connect(dbConnectionString)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch(error => {
        console.error("Error Connecting MongoDB:", error);
    });
