(async function() {
    
    async function sleep(time) {
        console.log('sleeping...');
        return new Promise(function(resolve,reject) {
            setTimeout(function() {
                resolve('done sleeping');
            }, time);
        });
    }

    // const promise = sleep(3000);
    // promise
    //     .then(function(message) {
    //         console.log(message);
    //     });

    const message = await sleep(3000);
    console.log(message);

    console.log('end of sync execution');
     
})();