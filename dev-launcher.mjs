import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(__dirname);

const next = spawn(
  process.execPath,
  [__dirname + '/node_modules/.bin/next', 'dev', '--port', '3000'],
  { cwd: __dirname, stdio: 'inherit', env: { ...process.env, PATH: '/usr/local/bin:' + (process.env.PATH || '') } }
);

next.on('exit', (code) => process.exit(code ?? 0));
