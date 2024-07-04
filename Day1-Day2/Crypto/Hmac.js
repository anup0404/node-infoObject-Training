const crypto=require('crypto');

const secret="abcdefgh";
const hash =crypto.createHmac('sha256',secret).update("welcome to infoobject").digest('hex')

console.log(hash)