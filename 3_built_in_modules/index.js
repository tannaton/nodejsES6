// // Node.js Built-in Modules
// // ------------------------
// // 1. File System (fs)
// // 2. Path (path)
// // 3. Operating System (os)
// // 4. Events (events)
// // 5. HTTP (http)
// // ------------------------

// // Path (path)
//const path = require('path')

// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))
// console.log(path.parse(__filename).base)

// // File System (fs)
//const fs = require('fs')

// // สร้างไฟล์ใหม่ด้วย module fs
// fs.writeFileSync(path.join(__dirname,'data.txt'), 'Hello ')

// // อ่านไฟล์ด้วย module fs
// console.log(fs.readFileSync(path.join(__dirname,'data.txt'),'utf8'))

// // Operating System (os)
 const os = require('os')

console.log(os.cpus())
console.log(os.hostname())
console.log(os.homedir())
console.log(os.uptime())
console.log(os.platform())
console.log(os.release())
console.log(os.arch())
console.log(os.type())
console.log(os.loadavg())
console.log(os.networkInterfaces())
// console.log(os.networkInterfaces()['Wi-Fi'][3].address)

