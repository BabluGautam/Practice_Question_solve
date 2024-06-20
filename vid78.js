// async function getData(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve (455)
        
//     }, 3000);
// })

// }

// async function main(){
//     console.log("Inilizing Hacking ...")
// console.log("Reading your files ...")
// console.log("Password files Detected ...")
// console.log("sending all files and password to the server ...")
// console.log("cleaning up ...")

// let data =  await getData()
// console.log(data)
// console.log("process data ")
// console.log("task 2")
// }
// main()
let a= prompt("enter first numbers")
let b= prompt("enter second numbers")
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("Sorry this is not Allowed")
}
let sum = parseInt(a)+ parseInt(b)


async function main(){
let x =1;
try {
    console.log("the sum is",sum*x)
    return true 

} catch (error) {
    console.log("error aa gya 22")
    return false 

}
// finally are very imp role play because this is print atleast once time for example when we try return keyword//
finally{
    console.log("files are closed and db connection closed " )
}
}
// ab ye function work nhi krega then we use a function and convdert function //
let c =main()