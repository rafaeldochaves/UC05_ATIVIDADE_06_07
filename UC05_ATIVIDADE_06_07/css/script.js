let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 8000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;    
}
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login ==  "admin" && senha == "admin"){
        alert('Sucesso');
    }else{
        alert('Usuário e Senha incorretos');
    }
}
