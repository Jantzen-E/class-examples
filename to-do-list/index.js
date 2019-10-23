const listElement = document.querySelector('#list');
const inputBoxElement = document.querySelector('#inputBox');
const addButtonElement = document.querySelector('#addButton');

addButtonElement.addEventListener ('click', function() {
    const item = inputBoxElement.value;

    if (item !== '') {
        const newListElement = document.createElement('li');
        newListElement.textContent = item;

        // Add the list-element class 
        newListElement.classList.add('list-element');

        newListElement.addEventListener('click', function() {
            newListElement.remove();
        });

        listElement.append(newListElement);
        inputBoxElement.value = '';
    }
    else {
        alert("Please remember to write something in the search field");
    }

    addNewListItem();
});

inputBoxElement.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        const item = inputBoxElement.value;

        if (item !== '') {
            const newListElement = document.createElement('li');
            newListElement.textContent = item;
    
            // Add the list-element class 
            newListElement.classList.add('list-element');
    
            newListElement.addEventListener('click', function() {
                newListElement.remove();
            });
    
            listElement.append(newListElement);
            inputBoxElement.value = '';
        }
        else {
            alert("Please remember to write something in the search field");
        }
        addNewListItem();

        }
    });

function addNewListItem() {

};