# Imersão_FSFC 2.0

Desafio - 2

Como rodar:

1 - Clone o repositório </br>
2 - Rode `docker-compose up -d`

Desafio - 3 

Informações do desafio
Nesse desafio, você deverá gerar os manifestos yaml do Kubernetes (deployment e service) para o backend e o frontend que criados no desafio 2.


Você NÃO precisa utilizar um Cloud Provider como AWS, GCP e Azure para realizar essa tarefa. Você pode realizar localmente a instalação do cluster utilizando o Kind (https://kind.sigs.k8s.io/).


Crie uma pasta chamada k8s no seu repositório do github (utilizado no desafio anterior) e informe no campo abaixo.

- Executar o servidor: </br>
1 - ` kubectl apply -f server/k8s/deployment.yml` </br>
2 - ` kubectl apply -f server/k8s/service.yml` </br>
3 - ` kubectl port-forward service/server-service 3000:3000` (aplicação estará rodando na porta 3000) </br>

- Executar a aplicação React: </br>
1 - ` kubectl apply -f client/k8s/deployment.yml` </br>
2 - ` kubectl apply -f server/k8s/service.yml` </br>
3 - ` kubectl port-forward service/server-service 3001:3000` </br>
