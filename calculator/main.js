class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.readyToReset = false;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
        this.readyToReset = false;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation = prev + current;
                if (isNaN(current.toString().split('.')[1]) && !isNaN(prev.toString().split('.')[1])) {
                    this.currentOperand = computation.toFixed(prev.toString().split('.')[1].length);
                } else
                if (!isNaN(current.toString().split('.')[1]) && isNaN(prev.toString().split('.')[1])) {
                    this.currentOperand = computation.toFixed(current.toString().split('.')[1].length);
                } else
                if (!isNaN(computation.toString().split('.')[1])) {
                    computation = computation.toFixed(Math.max(prev.toString().split('.')[1].length, current.toString().split('.')[1].length))
                }
                if (!isNaN(computation.toString().split('.')[1])) {
                    if (computation.toString().split('').pop() === "0") {
                        computation = computation.slice(0, (computation.toString().length - 1))
                    }
                }
                this.currentOperand = computation;
                break;
            case "-":
                computation = prev - current;
                if (isNaN(current.toString().split('.')[1]) && !isNaN(prev.toString().split('.')[1])) {
                    this.currentOperand = computation.toFixed(prev.toString().split('.')[1].length);
                } else
                if (!isNaN(current.toString().split('.')[1]) && isNaN(prev.toString().split('.')[1])) {
                    this.currentOperand = computation.toFixed(current.toString().split('.')[1].length);
                } else
                if (!isNaN(computation.toString().split('.')[1])) {
                    computation = computation.toFixed(Math.max(prev.toString().split('.')[1].length, current.toString().split('.')[1].length))
                }
                if (!isNaN(computation.toString().split('.')[1])) {
                    if (computation.toString().split('').pop() === "0") {
                        computation = computation.slice(0, (computation.toString().length - 1))
                    }
                }
                this.currentOperand = computation;
                break;
            case "*":
                computation = prev * current;
                if (!isNaN(prev.toString().split('.')[1]) && !isNaN(current.toString().split('.')[1])) {
                    computation = computation.toFixed(prev.toString().split('.')[1].length + current.toString().split('.')[1].length);
                } else
                if (isNaN(current.toString().split('.')[1]) && !isNaN(prev.toString().split('.')[1])) {
                    computation = computation.toFixed(prev.toString().split('.')[1].length);
                } else
                if (!isNaN(current.toString().split('.')[1]) && isNaN(prev.toString().split('.')[1])) {
                    computation = computation.toFixed(current.toString().split('.')[1].length);
                }
                this.currentOperand = this.computation;

                break;
            case "÷":
                computation = prev / current;
                break;
            case "^":
                computation = Math.pow(prev, current);
                if (!isNaN(prev.toString().split('.')[1])) {
                    computation = computation.toFixed(prev.toString().split('.')[1].length * current)
                }
                break;
            default:
                return;
        }

        this.readyToReset = true;
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    sqrt() {
        if (this.currentOperand < 0) return alert("Error");
        this.currentOperand = Math.sqrt(this.currentOperand);
    }

    negative() {
        this.currentOperand * (-1);
        this.currentOperand = this.currentOperand * (-1);
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0,
            });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(
            this.currentOperand
        );
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = "";
        }
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const sqrtButton = document.querySelector("[data-sqrt]");
const negativeButton = document.querySelector("[data-negative]");
const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
    "[data-current-operand]"
);

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (
            calculator.previousOperand === "" &&
            calculator.currentOperand !== "" &&
            calculator.readyToReset
        ) {
            calculator.currentOperand = "";
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener("click", (button) => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
});

sqrtButton.addEventListener("click", (button) => {
    calculator.sqrt();
    calculator.updateDisplay();
});

negativeButton.addEventListener("click", (button) => {
    calculator.negative();
    calculator.updateDisplay();
});