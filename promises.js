let success = true;

let myPromise = new Promise((resolve,reject)=>{
    if(success){
        resolve("SUCCESS");
    }
    else{
        reject("FAILURE");
    }
})

myPromise.then(result =>{
    console.log("result",result)
})
.then(()=>{
    console.log("@nd then executed")
})
.catch(error=>{
    console.log("error",error)
})
.finalyy(()=>{
    console.log("Completed")
})