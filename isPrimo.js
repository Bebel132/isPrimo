function isPrimo(valor) {
    if(!isNaN(valor)){
        for(let i = 2; i<=valor; i++){
            if(i == Math.round(valor/2)){
                return true;
            } else {
                if(valor%i == 0){
                    if(i != valor){
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }
    }
}

document.querySelector("#enviar").addEventListener('click', (e) => {
    e.preventDefault()
    let numero = document.querySelector("#numero").value;
    let saida = document.querySelector(".saida");

    saida.innerHTML = "";

    if(isPrimo(numero)){
        saida.append(document.createTextNode(`${numero} é um número primo`));
    } else {
        saida.append(document.createTextNode(`${numero} não é um número primo`));
    }
})
