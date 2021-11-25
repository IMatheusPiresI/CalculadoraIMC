
function calcular(){
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var res = document.getElementById('res')

    if(nome !== '' && altura !== '' && peso !== ''){
    
    var imc = (peso / (altura * altura)).toFixed(1)

    var classificacao = ''
        if(imc < 18.5 ){
            classificacao = 'você está abaixo do peso'
        }else if(imc == 18.5 || imc < 24.9){
            classificacao = 'você está no peso ideal'
        }else if(imc == 25 || imc < 29.9){
            classificacao = 'você está com sobrepeso'
        }else if(imc == 30 || imc < 35){
            classificacao = 'você está com obesidade grau I'
        }else if(imc == 35 || imc < 40){
            classificacao = 'você está com obesidade grau II'
        }else{
            classificacao = 'você está com obesidade grau III'
        }
    
    res.innerHTML = (`Olá ${nome}, seu IMC é de ${imc} e ${classificacao}`)

    }else{
        res.innerHTML = 'Preencha todos os campos!!!'
    }
}