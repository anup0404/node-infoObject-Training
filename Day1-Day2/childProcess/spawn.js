// const {spawn} =require('child_process');

// const child=spawn('pwd');

// child.stdout.on('data',(data)=>{
//     console.log(`stdout : ${data}`)
// })
// child.stderr.on('data',(data)=>{
//     console.error(`error : ${data}`)
// })
const { spawn } = require('node:child_process');
const child = spawn('cmd', ['/c', 'cd']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});