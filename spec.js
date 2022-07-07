const os=require("os");
console.log("Free memory",os.freemem()/1024/1024/1024);
//1024 bytes -> 1kb
console.log("Total memory",os.totalmem()/1024/1024/1024);
console.log("Version",os.version());
console.log("Cpus",os.cpus());