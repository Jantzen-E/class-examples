let i = 1;

do {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log("FIZZBUZZ");
    }

    else if(i % 3 === 0) {
        console.log("FIZZ");
    }
    
    else if(i % 5 === 0) {
        console.log("BUZZ");
    }
    
    else {
        console.log(i);
    }

    i++;

}
while (i < 101);
