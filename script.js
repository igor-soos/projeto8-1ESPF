//declaração de variavel

let p1=prompt("digite seu nome");
let p2=prompt("digite seu poder");
let p3=prompt("digite o nome do vilão");
let p4=prompt("digite nome do lugar");
let msg=document.getElementById("msg");

msg.innerHTML=`olá ${p1}, o seu poder é ${p2} e você vai enfrentar ${p3} na ${p4}`
