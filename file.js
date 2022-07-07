const fs=require("fs");

const quote="No beauty shines brighter than that of good heart";
fs.writeFile("./awesome.html",quote,(err)=>{
    console.log("completed writing");
})

const quote2="live more, worry less";
const[, , n]=process.argv;
for(let i=1;i<=n;i++){
    fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
        console.log(err);
        console.log(`Completed writing text-${i}.html`)
    })
}