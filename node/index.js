const fs =require('fs');
//fs.writeFile("./b.txt","cse dept",()=>{;
// fs.readFile("./a.txt","utf-8",(err,result)=>{

//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result);
//     }
// })
// fs.writeFile("./b.txt","cse",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// fs.cpSync("./a.txt","./c.txt");
// fs.cp("./a.txt","./c.txt",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
// })
// fs.unlinkSync("./a.txt");
fs.unlink("./b.txt",(err)=>{
    if(err)
    {
        console.log(err)
    }

})