//Creo Array
const emailArr = ["pippo01" , "pluto47", "paperino00", "topolino33" ];
const serviceArr = ["gmail.com", "tiscali.it", "yahoo.com"];
console.log(emailArr);
console.log(serviceArr);
//Assegno elementi dalla pagina HTML
const btnElem = document.getElementById("send-btn");
let emailElem = document.getElementById("email");
console.log(emailElem);

let inLista = "";

//Aggiungo l'evento al click
btnElem.addEventListener("click", function(){
    //Creo una variabile che prende contenuto dell'input field
    inputElem = emailElem.value;
    console.log(inputElem);

    //faccio sì che la variabile divenga un array così da studiare pre @ e post @
    let str = inputElem.split('@');
    console.log(str);
    //inizializzo una flag a falso
    let flag = false;
    let flag1 = false;
    
    //inizio un ciclo di controllo
    for(let i=0; (i <= emailArr.length - 1) && (flag === false); i++){
        if(str[0] === emailArr[i]){
            flag = true;
            console.log(flag);
        } else if (i === emailArr.lenght - 1 && flag === true){
            //Se l'email non figura in nessun elemento dell'array creato
            alert("La tua e-mail non è presente");
        } 
    }
    console.log(str[1], str[0]);
    //vado a controllare che l'array creato str, abbiamo la parte dell'email esistente e valida
    for(let a = 0; a <= serviceArr.length - 1; a++){
        if(str[1] === serviceArr[a]){
            console.log("email valida");
            flag1 = true;
        }
    }

    if(flag === true && flag1 === true){
        document.getElementById("res").innerHTML = "ok ci sei"
    }

})