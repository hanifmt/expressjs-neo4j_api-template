//Include this Folder in .gitignore! Place required confidential keys / passwords in here.
// const dbconfig = {
// 	username: "neo4j",
// 	password: "n4j",
// 	uri: "bolt://0.0.0.0:7687"
// }
exports.setting = {
	maxlistener : 15, document_filename: './swagger.yaml', port: 8080
}
exports.auth = {
	username: "neo4j", password: 'n4j', uri: "bolt://0.0.0.0:7687"
}
// module.exports = { dbconfig };