//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne=2,numberTwo=3
alert("Adição: "+(numberOne+numberTwo))

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". 💡 Para saber o tipo de dado você pode usar o operador `typeof`
let is_Number = 12
alert(typeof is_Number === 'number'?'É um número':'Não é um número')

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let is_String = 1 //"uma frase"
alert(typeof is_String === 'string'?'É uma string':'Não é uma string')

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let is_Boolean = 25 // true
alert(typeof is_Boolean === 'boolean'?'É um booleano':'Não é um booleano')


//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
alert("Subtração: "+(numberTwo - numberOne))

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
alert("Multiplicação: "+(numberTwo * numberOne))


//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
alert("Divisão: "+(numberTwo / numberOne))


//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
alert(numberOne % 3 == 0?'É um número par':'Não é um número par')

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
alert(numberOne % 2 == 0?'Não é um número impar':' É um número impar')

