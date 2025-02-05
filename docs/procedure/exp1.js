document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleCircuit");
    const circuitStatus = document.getElementById("circuitStatus");

    let isCircuitOn = false;

    toggleButton.addEventListener("click", function () {
        isCircuitOn = !isCircuitOn; // Toggle the circuit state
        circuitStatus.textContent = isCircuitOn ? "Circuit is ON" : "Circuit is OFF";
        toggleButton.textContent = isCircuitOn ? "Turn Off Circuit" : "Turn On Circuit";
    });
});
