import yargs from 'yargs';
import { sum } from './functions';

const argv = yargs
  .command(
    'sum <a> <b>',
    'Adds two numbers',
    (yargs) => {
      return yargs
        .positional('a', {
          describe: 'First number',
          type: 'string',
        })
        .positional('b', {
          describe: 'Second number',
          type: 'string',
        });
    },
    (argv) => {
      const result = sum(argv.a ?? '', argv.b ?? '');
      console.log('Result:', result, typeof result);
    }
  )
  .demandCommand(1, 'Please specify a command.')
  .help()
  .argv;
