# Imersão_FSFC 2.0

Desafio - 2

Informações do desafio
Nesse desafio você trabalhará com backend e frontend juntos para consolidar os conhecimentos adquiridos nas aulas de Nest.js e React.js.


Para isso:

- Crie um docker-compose.yaml que levante uma aplicação Nest.js e React juntos

- A aplicação Nest.js precisa rodar na porta 3000

- Aplicação React.js precisa rodar na porta 3001.

- Ao acessar http://localhost:3001 a aplicação React precisa consumir e listar "rotas" do endpoint do Nest.js: http://localhost:3000/routes.

- O endpoint http://localhost:3000/routes precisa retornar 5 rotas com os seguintes dados: title - título da rota, startPosition - contém latitude e longitude, endPosition - contém latitude e longitude

Como rodar:

1 - Clone o repositório </br>
2 - Rode `docker-compose up -d`

Desafio - 3 

Informações do desafio
Nesse desafio, você deverá gerar os manifestos yaml do Kubernetes (deployment e service) para o backend e o frontend que criados no desafio 2.


Você NÃO precisa utilizar um Cloud Provider como AWS, GCP e Azure para realizar essa tarefa. Você pode realizar localmente a instalação do cluster utilizando o Kind (https://kind.sigs.k8s.io/).


Crie uma pasta chamada k8s no seu repositório do github (utilizado no desafio anterior) e informe no campo abaixo.

- Executar o servidor: </br>
1 - ` kubectl apply -f k8s/server/deployment.yml` </br>
2 - ` kubectl apply -f k8s/server/service.yml` </br>
3 - ` kubectl port-forward service/server-service 3000:3000` (aplicação estará rodando na porta 3000) </br>

- Executar a aplicação React: </br>
1 - ` kubectl apply -f k8s/client/deployment.yml` </br>
2 - ` kubectl apply -f k8s/client/service.yml` </br>
3 - ` kubectl port-forward service/client-service 3001:3000` </br>
