var fs = require("fs");
console.log("Starting");
fs.writeFileSync("./files/write_sync.txt", "Hi Friend! Sync");
