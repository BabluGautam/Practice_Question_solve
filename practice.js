// let prome = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("yes am i done");
//     resolve("harry");
//   }, 1000);
// });

// prome.then((a) => {
//   console.log(a)
// })

// let prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("yes i am done");
//     resolve("bablu")
//   }, 1000);
// });
// prom1.then((a)=>{
//     console.log(a)
// })
// console.log("bablu gautam")
// console.log("bablu gautam")
// console.log("kaise ho ap")

// console.log("heybabli")

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 1000);
  });
}

let a= await sleep()
let b= await sleep()
