it-hot: it-stop build up

it-please: prepare-db load-fixtures

it-stop: 
	docker-compose down

build: 
	docker-compose build

up: 
	docker-compose up -d --remove-orphans

connect-back: 
	docker-compose run --rm backend bash

log-back: 
	docker container logs stratwars-docker_backend_1

prepare-db:
	docker exec -ti stratwars-docker_backend_1 sh -c "php bin/console doctrine:schema:update --force"

load-fixtures:
	docker exec -ti stratwars-docker_backend_1 sh -c "php bin/console doctrine:fixtures:load --append"