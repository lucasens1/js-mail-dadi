//
const emailArr = ["pippo01" , "pluto47", "paperino00", "topolino33" ];
const serviceArr = ["gmail.com", "tiscali.it", "yahoo.com"];
console.log(emailArr);
console.log(serviceArr);
const btnElem = document.getElementById("send-btn");
let emailElem = document.getElementById("email");
console.log(emailElem);

btnElem.addEventListener("click", function(){
    inputElem = emailElem.value;
    console.log(inputElem);

    let str = inputElem.split('@');
    console.log(str);
    let flag = false;

    for(let i=0; (i <= emailArr.length - 1) && (flag === false); i++){
        if(str[0] === emailArr[i]){
            flag = true;
            console.log(flag);
            //esco dal ciclo
            return;
        } else if (i === emailArr.lenght - 1 && flag === false){
            //Se l'email non figura in nessun elemento dell'array creato
            alert("La tua e-mail non è presente");
        }
        
    }
    //vado a controllare che l'array creato str, abbiamo la parte dell'email esistente e valida
    for(let a = 0; a <= serviceArr.length - 1; a++){
        if(str[1] === serviceArr[a]){
            console.log("email valida");
        } else {
            //alert ("Email non valida");
            return;
        }
    }
})