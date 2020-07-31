const program = require('commander')

program
    .command('set')
    .description('Set API Key - Get at https://nomics.com')
    .action(()=> console.log('hey from set'))

program.parse(process.argv)