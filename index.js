const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pass1el = document.getElementById('pass-1');
const pass2el = document.getElementById('pass-2');

const textInput = document.getElementById('text');
const checkboxNum = document.getElementById('cb1');
const checkboxSym = document.getElementById('cb2');

function generatePassword(){
    if(textInput.value === ''){
        return alert("Password length cannot be empty!");
    }
    let passlen = Number.parseInt(textInput.value);

    
    if(passlen > 15 || passlen < 5){
        return alert("Password length should be in between 5 to 15")
    }
    
    
    pass1el.textContent = generateKey(passlen);
    pass2el.textContent = generateKey(passlen);
}

function generateKey(passlen){
    let key = "";
    if (checkboxNum.checked === true && checkboxSym.checked === false){
    for(let i =0; i < passlen; i++){
        key+= characters[Math.floor(Math.random() * 62)];
    }
    return key;
    } else if (checkboxNum.checked === false && checkboxSym.checked === true){
        let arr = characters.filter((_, index) => index < 51 || index > 61);
    for(let i =0; i < passlen; i++){
        key+= arr[Math.floor(Math.random() * arr.length)];
    }
    return key;
    }else{
    for(let i =0; i < passlen; i++){
        key+= characters[Math.floor(Math.random() * characters.length)];
    }
    return key;
    }
}

function copy1(){
    navigator.clipboard.writeText(document.getElementById('pass-1').textContent);
}

function copy2(){
    navigator.clipboard.writeText(document.getElementById('pass-2').textContent);
}