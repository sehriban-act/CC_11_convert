const text=document.getElementsByTagName('textarea');
const conBtn=document.getElementsByTagName('button');
const conHere=document.getElementById('id');
console.log(conHere);
// conHere.innerHTML=text.value;

function myFunction() {
    conHere.innerHTML=document.getElementById("myTextarea").value;
    conHere.style.textTransform="capitalize";}