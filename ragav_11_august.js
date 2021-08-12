// let username = window.confirm("do u want to leave");
// console.log(username);



// let username = window.prompt("enter ur name");
// console.log(username);


// let x = 10 + 1;
// console.log(x);

// setTimeout -> fn, timer(ms)

// setTimeout(() => console.log("Aravindan"), 4000);
// setInterval(() => console.log("Abinaya"), 1000);
let i = 0;
let color = ["red", "blue", "green"];
let cycle_colors = () => {
    document.body.style.backgroundColor = color[i];
    console.log(color[i]);
    // i++
    i = (i + 1) % color.length;
}


// let startcycle_var = setInterval(cycle_colors, 1000);
// setTimeout(() => clearInterval(startcycle_var), 1000 * 10)
function click_start() {
    startcycle_var = setInterval(cycle_colors, 1000);
}

function click_stop() {
    clearInterval(startcycle_var);
    // console.log("this is clicked");
}