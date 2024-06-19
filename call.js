console.log("Bablu is hacker")
console.log("Rohan is hecker")

// function ko as a variable put kar skte hai //
const sn=()=>{
    console.log("cheating")
}

const fn=()=>{
    console.log("nothing")
}
const callback=(arg,fn,sn)=>{
    console.log(arg)
    fn()
    sn()
}

const loadScript =(src,callback)=>{
    let sc =document.createElement("Script");
    sc.src=src;
    sc.onload=callback("Bablu gautam",fn,sn)
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)