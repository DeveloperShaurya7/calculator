const display = document.getElementById("display");

// Event delegation to handle number and operator clicks efficiently
document.querySelector(".buttons").addEventListener("click", function (event) {
    const target = event.target;
    
    if (target.classList.contains("btn") || target.classList.contains("op")) {
        display.value += target.innerText;
    } else if (target.classList.contains("eq")) {
        calculate();
    } else if (target.id === "clear") {
        display.value = "";
    }
});

// Function to evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value.replace(/x/g, "*").replace(/÷/g, "/"));
    } catch {
        display.value = "Error";
    }
}
