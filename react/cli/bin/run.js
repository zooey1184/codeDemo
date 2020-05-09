const spawn = require('cross-spawn')

spawn.sync('git', ['add', '.'], {stdio: 'inherit'})
let r = spawn.sync('git', ['commit', '-m', '"update"'], {stdio: 'inherit'})
console.log(r);
spawn.sync('git', ['pull'], {stdio: 'inherit'})
spawn.sync('git', ['status'], {stdio: 'inherit'})
spawn.sync('git', ['push'], {stdio: 'inherit'})