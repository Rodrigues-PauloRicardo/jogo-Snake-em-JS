function botao(){
    alert ("codigo errado")
}



function botao1(){
    let botao= document.getElementById("botao1")
    let dados= document.getElementById("search")
    let number = parseInt(dados.value) + parseInt(5);  //parseInt() é para somar os numeros ao invés de concatenar

    //alert ("chgwquguigiduyg")
    if (dados.value == 0){
        window.alert ("COLOQUE UM NÚMERO NO CAMPO VAZIO")
    }else{
        window.alert ("o Resultado é:" + " " + number);

    }
}

