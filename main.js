const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2020-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");



contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    inf(tempofinal > 0 ){
        
   
 return [dias,horas,minutos,segundos];
    
} else {
    return [0,0,0,0];
    }
    function atualizaCronometro(){
        
        document.getElementById("dias0"+i).taxtContent = calculaTempo(tempos[i][0];
        document.getElementById("horas0"+i).taxtContent = calculaTempo(tempos[i][1];
        document.getElementById("min0"+i).taxtContent = calculaTempo(tempos[i][2];
        document.getElementById("seg0"+i).taxtContent = calculaTempo(tempos[i][3];
}

funtion atualiarCronometro(){
}
}
funtion comecaCronometro(){
    atualizaCronometro();
    setInterval(atualiaCronometro,1000);
}
comecaCronometro();
