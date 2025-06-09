# Documentação da API: Calculadora de Índice de massa corporal
###Este documento descreve o endpoint da API responsável por calcular o Índice de Massa Corporal (IMC) de uma pessoa com base em seu peso e altura.

1. EndPoint: calcula IMC:
   Rota que calcula o IMC da pessoa que informar:
   -URL: /imc
   -Rota: post
  1.1. Request
   A Requisição deve conter um corpo JSON e haver 2 linhas, uma indicando sua altura e a outra indicando seu peso.
   - Exemplo de corpo de requisição
    {
    "peso": 70,
    "altura": 1.75
    }
