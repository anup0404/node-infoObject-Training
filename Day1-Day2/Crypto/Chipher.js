const crypto=require('crypto')
const chipher=crypto.createCipheriv('aes192','a password');
let encrypted=chipher.update('hello infoobject','utf-8','hex');
encrypted+=chipher.final('hex')
console.log(encrypted);

//d784b7c4716680f1201edc6b4cda5edd2d4adc560ca074d56a2c16487364d4e8