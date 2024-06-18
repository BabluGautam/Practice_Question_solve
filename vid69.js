// let button=document.getElementById("btn")
// button.addEventListener("click",()=>{
//     alert("mission succesful bro")
// })
// document.querySelector(".box").style.backgroundColor="pink"

// let button=document.getElementById("btn")
// button.addEventListener("click",()=>{
//     button.document.queryselector(".box").innerHTML="i am good"
// })

// try out all fill all the color //
// document.querySelectorAll(".box").forEach(e => {
//     // console.log(e)
//     e.style.backgroundColor="yellow"
// });



    document.querySelector(".container").addEventListener("click",(e)=>{
        alert("container was clicked");
        })
        document.querySelector(".childchildren").addEventListener("click",(e)=>{
            e.stopPropagation()
            alert("childchildrenwasclick");
            });
            document.querySelector(".child").addEventListener("click",(e)=>{
                e.stopPropagation()
            alert("child was clicked");
            });

            // all code are write in the sequece foorm// 
