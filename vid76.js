// //  async function getData(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //         resolve(455)
// //         }, 3000);
    
// //     })
    
// // }
// async function getData(){
//     // let x =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(json => console.log(json))
//     // console.log(x)
//     // return 555
//    let x= await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         // .then((response) => response.json())
//         // .then((json) => console.log(json));
//     let data = await x.json()
//     // console.log(data)
//     return data
    
// }
// // settle means // 
// // ya to resolve or reject which one is executed//


// async function main (){
//     console.log("Loading modules")

// console.log("Do something else")

// console.log("Load data")

// let data = await getData()
// console.log(data)
// console.log("process data")
// console.log("task 2")
// }
// main()


