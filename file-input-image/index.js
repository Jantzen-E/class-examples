const uploadButtonElement = document.querySelector ('#uploadButton');
const fileInputElement = document.querySelector ('#fileInput');
const imageElement = document.querySelector ('#image');

uploadButtonElement.addEventListener('click', function() {
    fileInputElement.click();
}); 
// uploadButtonElement.addEventListener('drop', function(e) {
// });

function fileChanged(e) {
    const file = e.files[0];
 
    const reader = new FileReader();
 
    reader.onload = function(e) {
    imageElement.src = e.currentTarget.result;
    };
 
    reader.readAsDataURL(file);
}