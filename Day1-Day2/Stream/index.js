// const fs=require('fs');
// const http=require('http')

// const server=http.createServer();
// server.on('request',(req,res)=>{

    // 1st way  


    // fs.readFile('input.txt',(error,data)=>{
    //     if(error) return console.log(error)
    //         res.end(data.toString())
    // })


    // 2nd way 
//     const wstream=fs.createWriteStream('./big.txt')

//     for(let i=0;i<=1e6;i++){
//     wstream.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n')
//     }
//     wstream.end()
    

//     const rstream=fs.createReadStream('./big.txt');
//     rstream.on('data',(chunkData)=>{
//         res.write(chunkData)
//     })
//     rstream.on('end',()=>{
//         res.end();
//     })
//     rstream.on('error',(error)=>{
//         res.end('file not found')
//     })

    // 3rd way

    // const rstream=fs.createReadStream('input.txt')
    // rstream.pipe(res)

// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('server listen at 8000')
// })
