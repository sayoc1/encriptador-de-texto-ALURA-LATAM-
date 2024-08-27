const inputElement = document.getElementById('input-text');
const outputElement = document.getElementById('output-text');


function encryptText() {
    const text = inputElement.value;
    const encrypted = btoa(text); 
    outputElement.value = encrypted;
}


function decryptText() {
    const encryptedText = outputElement.value;
    const decrypted = atob(encryptedText); 
    outputElement.value = decrypted;
}


function clearFields() {
    inputElement.value = '';
    outputElement.value = '';
}


function copyText() {
    outputElement.select();
    document.execCommand('copy');
}


function validateInput() {
    inputElement.value = inputElement.value.replace(/[^a-zA-Z0-9 ]/g, '');
}
