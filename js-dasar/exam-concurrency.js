function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
.finally(() => {
    console.log("Welcome!");
})

// function fetchUsername() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('JSUser');
//         }, 3000);
//     })
// }

// console.log("Fetching username...");
// const username = fetchUsername();
// console.log(`You are logged in as ${username}`);
// console.log("Welcome!");