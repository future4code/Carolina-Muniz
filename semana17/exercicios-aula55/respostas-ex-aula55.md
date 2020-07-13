Exercício 1
a) Usando string nos dá mais opções de chaves, pois inclui letras, símbolos e números. E torna a repetição muito menos provável.

b) Respondido no index.ts

*******************************************************
Exercício 2
a) A const userTableName guarda em uma constante o nome da tabela User. Dessa forma facilita a manutenção do cógido.

A const connnection representa a configuração de nossa conexão com DB para que nossos dados sensíveis não sejam expostos no código.

A const createUser representa a função responsável pela inserção de novos usuários na tabela User.

b)
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

*******************************************************
Exercício 3
a) O as string garante que o valor não será undefined. 