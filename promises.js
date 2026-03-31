let success = true;

let myPromise = new Promise((resolve,reject)=>{
    if(success){
        resolve("SUCCESS");
    }
    else{
        reject("FAILURE");
    }
});


myPromise.then(result =>{
    console.log("result",result)
})
.then(()=>{
    console.log("@nd then executed")
})
.catch(error=>{
    console.log("error",error)
})
.finally(()=>{
    console.log("Completed")
});


myPromise.then(result =>{
    console.log("result",result);
})
.catch(error=>{
    console.log("error".error);
})
.finally(()=>{
    console.log("Completed");
});

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(data => {
    console.log(data.products);
}).catch(error=> {
    console.log("Error",error);
});



//E.g. - Promise is used for dependent tasks , when we want the later one to execute only after the first one is executed completely. It is an example of Atomicity.
// E.g. - when we use multiple apis so when first api call is success then only next one should be called.
// but it is not used in the case of updating profile picture and bio (because they are not dependent on each other).