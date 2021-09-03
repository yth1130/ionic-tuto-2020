// const calculateButton = document.querySelector("ion-button");
const calculateButton = document.getElementById("calc-btn");
const resetButton = document.getElementById("reset-btn");

const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");

const resultArea = document.getElementById("result");

const calculateBmi = () => {
    const enteredHeight = heightInput.value;
    const enteredWeight = weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    if (isNaN(bmi)) {
        alert("Not a number. Please check inputs");
        return;
    }

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;
    resultArea.innerHTML = '';
    resultArea.appendChild(resultElement);
};
const resetInputs = () => {
    heightInput.value = '';
    weightInput.value = '';
};

calculateButton.addEventListener("click", calculateBmi);
resetButton.addEventListener("click", resetInputs);