// // // // // // // 

// // // // // // let prom1 =new Promise((resolve,reject)=>{
// // // // // //     let a = Math.random();
// // // // // //     if(a<0.5){
// // // // // //         reject("not supporting")
// // // // // //     }
// // // // // //     else{
// // // // // //         setTimeout(() => {
// // // // // //             console.log("yes i am done ")
// // // // // //             resolve("Bablu")
            
// // // // // //         }, 1000);
// // // // // //     }
  
// // // // // //  })
// // // // // //  let prom2 =new Promise((resolve,reject)=>{
// // // // // //     let a = Math.random();
// // // // // //     if(a<0.5){
// // // // // //         reject("not supporting")
// // // // // //     }
// // // // // //     else{
// // // // // //         setTimeout(() => {
// // // // // //             console.log("yes i am done 2 ")
// // // // // //             resolve("Bablu 2")
            
// // // // // //         }, 1000);
// // // // // //     }
  
// // // // // //  })
// // // // // // //  let p3 =Promise.all([prom1,prom2])
// // // // // // // let p3 =Promise.allSettled([prom1,prom2])
// // // // // // // let p3 =Promise.race([prom1,prom2])
// // // // // // // let p3 =Promise.resolve([prom1,prom2])
// // // // // // // let p3 =Promise.reject([prom1,prom2])
// // // // // // let p3 =Promise.any([prom1,prom2])
// // // // // //     p3.then((a)=>{
// // // // // //         console.log(a)
// // // // // //     }).catch((err)=>{
// // // // // //         console.log(err)
// // // // // //     })



// // // // // const pErr = new Promise((resolve, reject) => {
// // // // //     // reject("Always fails");
// // // // //     setTimeout(resolve, 2000, "Always Fails") 
        

// // // // //   });
  
// // // // //   const pSlow = new Promise((resolve, reject) => {
// // // // //     setTimeout(resolve, 3000, "Done eventually");
// // // // //   });
  
// // // // //   const pFast = new Promise((resolve, reject) => {
// // // // //     setTimeout(resolve, 4000, "Done quick");
// // // // //   });
  
// // // // //   Promise.any([pErr, pSlow, pFast]).then((value) => {
// // // // //     console.log(value);
// // // // //     // pFast fulfills first
// // // // //   });
// // // // //   // Logs:
// // // // //   // Done quick


// // // // const bab = new Promise((resolve, reject) => {
// // // //     reject("Always fails");
// // // //   });
  
// // // //   Promise.any([bab]).catch((err) => {
// // // //     console.log(err);
// // // //   });
// // // //   // AggregateError: No Promise in Promise.any was resolved
  
// // // Promise.resolve("Success").then(
// // //     (value) => {
// // //       console.log(value); 
// // //       // "Success"
// // //     },
// // //     (reason) => {
// // //       // not called
// // //     },
// // //   );
  
// // const p = Promise.resolve([1, 2, 3]);
// // p.then((v) => {
// //   console.log(v[0]); // 1
// // });
// // const p1 = Promise.resolve([1, 2, 3]);
// // p1.then((v) => {
// //   console.log(v[1]); // 1
// // });
// // const p2= Promise.resolve([1, 2, 3]);
// // p2.then((v) => {
// //   console.log(v[2]); // 1
// // });

// // const original = Promise.resolve(33);
// // const cast = Promise.resolve(original);
// // cast.then((value) => {
// //   console.log(`value: ${value}`);
// // });
// // console.log(`original === cast ? ${original == cast}`);

// // Logs, in order:
// // original === cast ? true
// // value: 33

// const original = Promise.resolve(33);
// const cast = Promise.resolve(original);
// cast.then((value) => {
//   console.log(`value: ${value}`);
// });
// cast.then((original) => {
// console.log(`original === cast ? ${original == cast}`);
// });


