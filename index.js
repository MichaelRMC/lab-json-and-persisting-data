const { createRandomUser, createRandomGroup } = require( "./music-lovers" )
const {readJSONFile, writeJSONFile} = require("./helpers")


function run() {
	const users = readJSONFile( "./data", "music-lovers-forum.json" );
	console.log( users )
	if (process.argv[3]) {
		users.push(...createRandomGroup(process.argv[3]))
	} else {
		users.push(createRandomUser())
	}
	writeJSONFile("./data", "music-lovers-forum.json", users)
}

run()