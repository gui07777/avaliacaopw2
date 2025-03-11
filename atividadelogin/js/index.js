function criar(){
    alert("Cadastro realizado com sucesso!")
}
var email = document.getElementById('email').value;
var usuario = document.getElementById('usuario').value;
var senha1 = document.getElementById('senha1').value;
var senha2 = document.getElementById('senha2').value;

if(senha2 = senha1){
    criar();
}