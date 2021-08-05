const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the Data");
    } else {
        reject("Data not Found");
    }
});

////

const addition = (a, b) =>
    new Promise((resolve, reject) => {
        if (typeof a == "number" && typeof b == "number") {
            resolve(a + b);
        } else {
            reject("Not a Number")
        }
    });