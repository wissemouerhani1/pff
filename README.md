before all make sure to update the config.json file in the database/config folder with your own credentials.
then run these commands on the terminal from the database folder to create the database with all tables.
npx sequelize-cli db:create
npx sequelize-cli db:migrate

to generate model 
example 
  npx sequelize model:generate --name Admin --models-path ./models/ --attributes "name:STRING,last_name:STRING"

to add seeders
npx sequelize-cli seed:generate --name cohort

to run all seeds
npx sequelize-cli db:seed:all
