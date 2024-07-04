// const events=require('events');

// const eventEmitter= new events.EventEmitter();
// eventEmitter.on('myfunction',()=>{
//     console.log("hello")
// })

// eventEmitter.emit('myfunction')  .






// const EventEmitter=require('events')
// const myEmitor=new EventEmitter();

// myEmitor.on('event',(a,b)=>{
//     console.log(a,b,this,this===myEmitor)
// })

// myEmitor.emit('event','anup','mani')







// const EventEmitter=require('events')
// const myEmitor=new EventEmitter();

// myEmitor.on('event',(a,b)=>{
//    setImmediate(()=>{
//     console.log('this happens asynchrousnally')
//    })
// })

// myEmitor.emit('event','anup','mani')





const EventEmitter=require('events')
const myEvent=new EventEmitter()
let m=0;
// myEvent.on('event',()=>{
//     m++;
// })

myEvent.once('event',()=>{
    m++;
})
myEvent.emit('event')
myEvent.emit('event')
console.log(m)