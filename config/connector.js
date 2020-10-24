let neo4j = require('neo4j-driver');
let dbconfig = require("./dbconfig").auth;
let driver = neo4j.driver(dbconfig.uri, neo4j.auth.basic(dbconfig.username, dbconfig.password));

module.exports = { driver };