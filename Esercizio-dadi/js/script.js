const btnElem = document.getElementById("btn-activate");
console.log(btnElem);
let pElem;

btnElem.addEventListener("click", function(){
    let a;
    let b;

    a = Math.floor(Math.random()*7);
    console.log(a);

    b = Math.floor(Math.random()*7);
    console.log(b);

    if(a === b){
        pElem = "Pareggio!";
        console.log(pElem);
        document.getElementById("result").innerHTML = pElem;
    } else if ( a > b ){
        pElem = "Hai vinto!";
        console.log(pElem);
        document.getElementById("result").innerHTML = pElem;
    } else {
        pElem = "Hai perso!";
        console.log(pElem);
        document.getElementById("result").innerHTML = pElem;
    }
})