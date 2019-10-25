const firstNameElement = document.querySelector('#firstName');
const lastNameElement = document.querySelector('#lastName');
const ageElement = document.querySelector('#age');
const favoriteFoodElement = document.querySelector('#favoriteFood');

function fileChanged(e) {
    const file = e.files[0];
 
    const reader = new FileReader();
 
    reader.onload = function(e) {
        const jsonString = e.currentTarget.result;
        const obj = JSON.parse(jsonString);
 
        firstNameElement.value = obj.firstName;
        lastNameElement.value = obj.lastName;
        ageElement.value = obj.age;
        favoriteFoodElement.value = obj.favoriteFood;
 
    };
 
    reader.readAsText(file);
}