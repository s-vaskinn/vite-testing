const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000) //wait 2000ms
})

myPromise.then((data) => {
    console.log(data)
})

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected")
    }, 2000) //wait 2000ms
})

myPromise1.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error);
})

