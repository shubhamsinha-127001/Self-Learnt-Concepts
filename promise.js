new Promise((reslove, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        reslove('SUCCESS');
    }
    else {
        reject('Failed');
    }
}).then((msg) => {
    console.log('this is from teh sussess case ' + msg);
}).catch((msg) => {
    console.log('From a failure case ' + msg);
})


