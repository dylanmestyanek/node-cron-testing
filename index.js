const server = require("express")();

server.listen(process.env.PORT || 4000, () => console.log("\n === We're doing it!! === \n"))

// const cron = require("node-cron");

// cron.schedule("0 0 */1 * * *", () => {
    console.count("test");
// })