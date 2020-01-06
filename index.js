const cron = require("node-cron");

cron.schedule("* * * * * *", () => {
    console.count("test");
})