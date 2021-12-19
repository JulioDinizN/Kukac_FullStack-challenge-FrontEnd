# Desafio Kukac Full-Stack

## Resumo

Este projeto foi um desafio proposto pela empresa Kukac, referente a vaga de desenvolvedor Full-Stack. O objetivo era construir uma aplicação completa com Front-end e Back-end para cumprir com alguns desafios propostos.

## Requisitos

Criar uma aplicação fazendo o uso do React e Redux para controle dos estados. Existem três conceitos chaves que precisam ser utilizados para alcançar este objetivo:
Criar um Front-end e um Back-end para alcanças os seguintes objetivos:

- Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação

- Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que
  alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de
  notas que o caixa deve fornecer como troco.
  Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do
  troco. Suponha que o sistema monetário não utilize moedas.
  O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.

- Crie a interface “Veiculo” com os seguintes atributos:
  => Modelo
  => Ano de fabricação
  => Quantidade de Portas
  => Marca

- Crie a classe “Carro”, que herda de Veículo e tem os seguintes atributos:
  => Quantidade de Portas: entre 2 e 4

- Crie a classe “Moto”, que herda de Veículo, e possui os seguintes atributos:
  => Rodas: 2
  => Passageiros: entre 1 e 2

- Deve ser informado pelo usuário 5 CEP’s, a aplicação deve consumir a api VIACep 
    >https://viacep.com.br/
  e obtiver dados sobre esses CEP’s.
  Os CEP’s informados pelo usuário devem ser inicialmente armazenados em um array, e o
  consumo da API deve ser de forma síncrona.
  Os dados após o processamento devem ser exibidos na tela.

## Resultado Final

![image](https://user-images.githubusercontent.com/78332530/146692522-90e3ea00-ae02-4771-ba7f-1ce3a2333a66.jpg)
![image](https://user-images.githubusercontent.com/78332530/146692538-f19bdda7-ef35-4c83-8d5d-feaea960790c.jpg)

## Dependências

- React
  > https://reactjs.org/docs/getting-started.html
- Chakra Ui
  > https://chakra-ui.com/docs/getting-started
- Axios
  > https://axios-http.com/docs/intro
- react-hook-form
  > https://react-hook-form.com/get-started
- react-virtualized
  > https://github.com/bvaughn/react-virtualized

### Instalando Dependências

No diretório do projeto, você pode escrever:

`npm install`

E começar o projeto com:
`yarn start`
ou
`npm run start`

Roda no modo desenvolvedor. Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

