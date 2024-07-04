const path=require('path');
console.log(path.dirname('C:/Users/user/Desktop/NodeJs-Training/Path/PATH.JS'))
console.log(path.extname('C:/Users/user/Desktop/NodeJs-Training/Path/PATH.JS'))
console.log(('C:/Users/user/Desktop/NodeJs-Training/Path/PATH.JS').delimiter)
console.log(('C:/Users;/user/Desktop;/NodeJs-Training;/Path/PATH.JS').split(path.delimiter))
console.log(path.parse('C:/Users/user/Desktop/NodeJs-Training/Path/PATH.JS'))

path.format({
    root: 'C:/',
    dir: 'C:/Users/user/Desktop/NodeJs-Training/Path',
    base: 'PATH.JS',
    ext: '.JS',
    name: 'PATH'
  })