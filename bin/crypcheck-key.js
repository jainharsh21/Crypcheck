const program = require("commander");

program
  .command("set")
  .description("Set API Key -- Get at https://nomics.com")
  .action(() => console.log("hey from set"));

program
  .command("show")
  .description("Show API Key")
  .action(() => console.log("hey from show"));

program
  .command("remove")
  .description("Remove API Key")
  .action(() => console.log("hey from remove"));

program.parse(process.argv);
