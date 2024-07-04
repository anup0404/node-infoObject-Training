const crypto=require('crypto');

const decipher=crypto.createDecipher('aes192','a password')

let encrypted="d784b7c4716680f1201edc6b4cda5edd2d4adc560ca074d56a2c16487364d4e8"

let decrypted=decipher.update(encrypted,'hex','utf8');
decrypted+=decipher.final('utf8')
console.log(decrypted)