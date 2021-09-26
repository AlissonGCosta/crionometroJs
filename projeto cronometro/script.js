window.onload = function(){
    var segundos = 00;
    var milesimos = 00;
    var addm = document.getElementById("milesimos")
    var adds = document.getElementById("segundos")
    var botaos = document.getElementById("bstart")
    var botaop = document.getElementById("bpause")
    var botaor = document.getElementById("breset")
    var intervalo ;

    botaos.onclick = function(){
        clearInterval(intervalo);
        intervalo = setInterval(startTimer, 10);
    }

    botaop.onclick = function() {
        clearInterval(intervalo);
    }

    botaor.onclick = function(){
        clearInterval(intervalo);
        milesimos = "00";
        segundos = "00";
        addm.innerHTML = milesimos;
        adds.innerHTML = segundos;
    }

    function startTimer(){
        milesimos++;

        if (milesimos <= 9){
            addm.innerHTML = "0" + milesimos;

        }

        if (milesimos > 9){
            addm.innerHTML = milesimos;
        }

        if (milesimos > 99){
            console.log("segundos")
            segundos++
            adds.innerHTML = "0" + segundos
            milesimos = 0
            addm.innerHTML = "0" + 0
        }

        if (segundos > 9){
            adds.innerHTML = segundos
        }
    }
}