// let button = document.getElementById("btn")

// button.addEventListener("click",()=>{
//     alert("shibu ??")
// })
// button.addEventListener("dblclick",()=>{
// document.querySelector(".box").innerHTML="Bablu Gautam"
// })
// button.addEventListener("contextmenu",()=>{
// alert("Right click please here")
// })

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("child was clicked");
  });
  document.querySelector(".childchildren")
    .addEventListener("click", (e) => {
      e.stopPropagation()
      alert("childChildren Was clicked");
    });

  document.querySelector(".container").addEventListener("click", (e) => {
    alert("container Was clicked");
  });

  
  
  
  function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
// let a = setInterval(() => {
//   document.querySelector(".childchildren").style.background= getRandomColor();
  
// }, 1000);
// console.log(a)

let a = setTimeout(() => {
  document.querySelector(".childchildren").style.background= getRandomColor();
  
}, 3000);
console.log(a)