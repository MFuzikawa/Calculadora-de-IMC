# Documentação da API: Calculadora de Índice de massa corporal
## Este documento descreve o endpoint da API responsável por calcular o Índice de Massa Corporal (IMC) de uma pessoa com base em seu peso e altura.

### 1. EndPoint: calcula IMC:
   Rota que calcula o IMC da pessoa que informar:
   - URL: /imc
   - Rota: post
 ### 1.1. Request
   A Requisição deve conter um corpo JSON e haver 2 linhas, uma indicando sua altura e a outra indicando seu peso.
   - Exemplo de corpo de requisição: <br>
    { <br>
    "peso": 70, <br>
    "altura": 1.75 <br>
    }
  ### 1.2 Response
  ### 1.2.1 Sucesso (HTTP 200 OK)
  Retorna o valor calculado do IMC e a classificação correspondente
  - Corpo da Resposta: <br>
  {<br>
    "imc": 22.86,<br>
    "classificacao": "Peso normal"<br>
  }
  ### 1.2.2 Erro do cliente (HTTP 400 Bad Request)
  ocorre quando os dados fornecidos na requisição não são as esperadas pela resposta(peso ou alltura negativos, zero ou não numericos)
  - Corpo da Resposta:<br>
  `{<br>
    "mensagem": "Peso e altura devem ser valores positivos e maiores que zero.", <br>
    "detalhes": {} <br>
  }`<br>

  Ou <br>

  {<br>
    "mensagem": "Os valores devem ser números.",<br>
    "detalhes": {}<br>
}
### 1.2.3 Erro do Servidor ( HTTP 500 Internal Server Error)
Ocorre quando existem falhas inesperadas no servidor não tem relação com o cliente
- Corpo da Resposta
{<br>
    "mensagem": "Ocorreu um erro interno inesperado no servidor."<br>
}
### Conclusão:
Esse simples projeto mão na massa para estudos me ajudou a exercitar métodos HTTP e entender mais como funcionam middlewares de erro personalizados