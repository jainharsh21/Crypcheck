const program = require("commander");

program
  .command("price")
  .description("Check Price Of Coins")
  .action(() => console.log("hey from price"));

program.parse(process.argv);
