import { DataSource } from "typeorm";


/* Explicando código abaixo:
  * Estamos utilizando um ternário para controlar a configuração
    do DataSource do typeorm.

  * Utilizamos uma variavel de ambiente para controlar isso pois
    para conseguir manipular mesmo em um ambiente de produção.

  * O banco em que fazemos os testes é o SQLite e precisamos 
    das configurações pré definidas abaixo para que os testes executem
    de forma correta.
*/

export const AppDataSource =
   process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    :  new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: 'adrielkenzie',
        password: '123',
        database: 'users_database',
        synchronize: false,
        logging: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

 /*      AppDataSource.initialize().then(()=>{
        console.log("Data source initialized")
    }).catch(err=>
        console.error('error during data source initialization',err)
        ) */