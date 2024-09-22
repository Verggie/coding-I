// Programa 01

var nome1 = "Lívia"
var idade = "29"
console.log(`Olá meu nome é ${nome1}`)

// Programa 02

const nome = "Tereza"
const estado = "Maranhão"
console.log(`${nome} é de ${estado}`)
 
// Programa 03

// soma

const num1 =  52
const num2 = 98
const soma = num1 + num2 
console.log(`A soma entre ${num1} e ${num2} é igual a: ${soma}`)

// subtração 

const num3 =  85
const num4 = 25
const sub = num3 - num4 
console.log(`A subtração entre ${num3} e ${num4} é igual a: ${sub}`)

// divisâo

const num5 =  1582
const num6 = 59
const div = num5 + num6 
console.log(`A divisão entre ${num5} e ${num6} é igual a: ${div}`)

// multiplicação

const num7 =  52
const num8 = 98
const multi = num7 + num8 
console.log(`A multiplicação entre ${num7} e ${num8} é igual a: ${multi}`)

// programa 04 

const base =  98
const altura = 98
const area = base * altura / 2  
console.log(`A  entre ${num1} e ${num2} é igual a: ${area}`)

/ Desconto:

const valor_produto = 500
const p_desconto = 0.20
const preco_final = valor_produto - (valor_produto * p_desconto)

const n1 = valor_produto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
const n2 = preco_final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(`Oferta relâmpago! Aproveite ${p_desconto*100}% de desconto por tempo limitado! De ${n1} por ${n2}.`)

// Imposto de renda:

const salario_bruto = 2750 // De R$ 1.903,99 a R$ 2.826,65: 7,5%
const taxa = 0.075
const imposto = (salario_bruto - 1903.98) * taxa

const IMP = imposto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(`O imposto de renda é: ${IMP}.`)

// Conversor de Moedas:

const taxa_cambio = 5.51
const valor_incial = 250
const valor_final = valor_incial / taxa_cambio

const n3 = valor_incial.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
const n4 = valor_final.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

console.log(`Hoje, os ${n3} equivalem a ${n4} na cotação atual de ${taxa_cambio}.`)

// Celsius para Fahrenheit:

const Celsius = 34
const Fahrenheit = (Celsius * 9 / 5) + 32

console.log(`Está fazendo ${Celsius}°C aqui no Brasil, lá nos EUA seria igual a ${Fahrenheit}°F.`)

// IMC:

const peso = 85
const altura = 1.82

const IMC = peso / (altura * altura)

console.log(`O resultado do IMC é ${IMC.toFixed(2)}.`)



