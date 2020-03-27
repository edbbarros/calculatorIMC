function calcular(){
    let peso = document.getElementById("campo_peso").value;
    let altura = document.getElementById("campo_altura").value;
    let result = document.getElementById("campo_resultado");
    
    peso = parseFloat(peso)
    altura = parseFloat(altura)
     result.value = calcImc(peso,altura).toFixed(2);

}

function calcImc(p,a){
    return p/(a*a)
}