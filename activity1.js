const greeting = () => {
    console.log("Hello Codenation");
}

const repeat = (greeting, rpt) => {
    for(i = 0; i < rpt; i++){
        greeting();
    }
}
repeat(greeting,5);