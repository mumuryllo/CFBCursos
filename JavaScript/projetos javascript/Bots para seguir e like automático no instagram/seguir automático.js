//Gideon- o seu amigo inteligente
var contador=0;
var arr= document.querySelectorAll('.L3NKy');
arr.forEach((v,i) => {
setTimeout(() =>{
if(!v.classList.contains('_8A5W5')){
v.click();
contador++;
console.log('gideon já seguiu'+contador+'pessoas');    
}else{
console.log('você já está seguindo este usuário');
    }
}, i*5000)
});

