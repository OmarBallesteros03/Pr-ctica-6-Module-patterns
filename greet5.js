let greeting = "Hello from greet 5";

let greet = () => {
    console.log(greeting);
}

let fly = () => {
    console.log("I am flying");
}

let swim = () => {
    console.log("I am swimming");
}

let anime = () => {
    console.log("I am watching anime");
}

module.exports = {
    greet,
    fly,
    swim,
    anime
}