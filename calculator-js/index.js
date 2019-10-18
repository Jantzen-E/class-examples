console.log('hello, world!') 

const valueAElement = document.querySelector('#valueA');
const valueBElement = document.getElementById('valueB');

const addButtonElement = document.querySelector('#add');
const subtractButtonElement = document.querySelector('#subtract');
const multiplyButtonElement = document.querySelector('#multiply');
const divideButtonElement = document.querySelector('#divide');

const resultElement = document.querySelector('#results');
// debugger;
addButtonElement.addEventListener('click', function() {
    const values = getValues(valueAElement, valueBElement);
    const result = values.a + values.b;

    resultElement.textContent = result;
});

subtractButtonElement.addEventListener('click', function() {
    const values = getValues(valueAElement, valueBElement);
    const result = values.a - values.b;

    resultElement.textContent = result;
});

multiplyButtonElement.addEventListener('click', function() {
    const values = getValues(valueAElement, valueBElement);
    const result = values.a * values.b;

    resultElement.textContent = result;
});

divideButtonElement.addEventListener('click', function() {
    const values = getValues(valueAElement, valueBElement);
    const result = values.a / values.b;

    resultElement.textContent = result;
});

function getValues(elementA, elementB) {
    const valueA = Number(elementA.value);
    const valueB = Number(elementB.value);

    const resultObject = {
        a: valueA,
        b: valueB
    };
    
    return resultObject;
}

