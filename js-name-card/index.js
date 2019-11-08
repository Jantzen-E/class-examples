const nameElement = document.querySelector('#name');
const inputBoxElement = document.querySelector('#inputBox');
const setNewNameButtonElement = document.querySelector('#setNewNameButton');

inputBoxElement.addEventListener ('keypress', function(e) {
    if (e.keyCode === 13) {
        const newName = inputBoxElement.value;
        // setNewNameFunction();
        nameElement.textContent = newName;   
    }
});





// const setNewNameFunction = function() {
//     const name = inputBoxElement.value;

//     nameElement.textContent = name;
// }

setNewNameButtonElement.addEventListener ('click', function() {
    const newName = inputBoxElement.value;
    nameElement.textContent = newName;
});

    



// inputBoxElement.addEventListener('keypress', function(e) {
//     if(e.keyCode === 13) {
//         const item = inputBoxElement.value;

